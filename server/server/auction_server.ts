import *as express from 'express';
import {Server} from 'ws';

const app=express();

export  class Product{

    constructor(
        public id : number,
        public title : string,
        public price : number,
        public rating : number,
        public desc : string,
        public cateqories: Array<string>
    ){

    }
}

const products :Product[]=[

    new Product(1,"第一课",1,1,"这是第一次课,今天是我第一次学习Angular",["网络教育","自学成才"]),
    new Product(2,"第二课",2,2,"这是第二次课,今天是我第一次学习Angular",["网络教育"]),
    new Product(3,"第三课",3,3,"这是第三次课,今天是我第一次学习Angular",["自学成才"]),
    new Product(4,"第四课",4,4,"这是第四次课,今天是我第一次学习Angular",["网络教育","自学成才"]),
    new Product(5,"第五课",5,5,"这是第五次课,今天是我第一次学习Angular",["自学成才"]),
    new Product(6,"第六课",6,4,"这是第六次课,今天是我第一次学习Angular",["网络教育"]),
    new Product(7,"第七课",7,3,"这是第七次课,今天是我第一次学习Angular",["成人高考"]),
    new Product(8,"第八课",9,2,"这是第八次课,今天是我第一次学习Angular",["网络教育"])

];



app.get('/api/',(req,res)=>{
res.send("hello express")
});

app.get('/api/products',(req,res)=>{
// res.send("接收到商品查询的请求")
    res.json(products)

})

app.get('/api/product/:id',(req,res)=>{
    res.json(products.find((product)=>
        product.id==req.params.id
    ))
});

app.get('/api/product/:id/comments',(req,res)=>{
    res.json(comments.filter((comment :Comment)=>
         comment.productId==req.params.id

    )
    )
});

const server= app.listen(8000,"localhost",()=>{
    console.log("服务器已经启动，地址是http://localhost：8000")
})


const wsServer=new Server({port:8085});
wsServer.on("connection",websocket=>{
    //在链接的情况下 向客户端推送消息
        websocket.send("这个代码是服务器主动推送的");
    //在链接的情况下 客户端向服务器发消息
        websocket.on("message",message=>{
            console.log("接收到从客户端发来的消息"+message)
        })
})

setInterval(()=>{
if (wsServer.clients){
wsServer.clients.forEach(client=>{
    client.send("这是定时推送")
})
}
},2000)

export class Comment{
    constructor(
        public id : number,
        public productId: number,
        public times:string,
        public user:string,
        public rating :number,
        public content:string
    ){

    }
}

const comments: Comment[] = [
    new Comment(1, 1, '2018年9月7日16:56:15', '1',4,'a a little gril'),
    new Comment(2, 1, '2018年9月7日16:57:45', '2',5,'a aa little gril'),
    new Comment(3, 2, '2018年9月7日16:57:50', '3',5,'a aaa little gril'),
    new Comment(4, 2, '2018年9月7日16:57:54', '4',4,'a aaaa little gril'),
    new Comment(5, 2, '2018年9月7日16:57:59', '5',3,'a aaaaa little gril'),
    new Comment(6, 1, '2018年9月7日16:58:03', '6',2,'a aaaaaa little gril'),
    new Comment(7, 1, '2018年9月7日16:58:07', '7',1,'a aaaaaaa little gril'),
];
