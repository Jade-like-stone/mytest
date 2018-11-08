"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var ws_1 = require("ws");
var app = express();
var Product = /** @class */ (function () {
    function Product(id, title, price, rating, desc, cateqories) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.cateqories = cateqories;
    }
    return Product;
}());
exports.Product = Product;
var products = [
    new Product(1, "第一课", 1, 1, "这是第一次课,今天是我第一次学习Angular", ["网络教育", "自学成才"]),
    new Product(2, "第二课", 2, 2, "这是第二次课,今天是我第一次学习Angular", ["网络教育"]),
    new Product(3, "第三课", 3, 3, "这是第三次课,今天是我第一次学习Angular", ["自学成才"]),
    new Product(4, "第四课", 4, 4, "这是第四次课,今天是我第一次学习Angular", ["网络教育", "自学成才"]),
    new Product(5, "第五课", 5, 5, "这是第五次课,今天是我第一次学习Angular", ["自学成才"]),
    new Product(6, "第六课", 6, 4, "这是第六次课,今天是我第一次学习Angular", ["网络教育"]),
    new Product(7, "第七课", 7, 3, "这是第七次课,今天是我第一次学习Angular", ["成人高考"]),
    new Product(8, "第八课", 9, 2, "这是第八次课,今天是我第一次学习Angular", ["网络教育"])
];
app.get('/api/', function (req, res) {
    res.send("hello express");
});
app.get('/api/products', function (req, res) {
    // res.send("接收到商品查询的请求")
    res.json(products);
});
app.get('/api/product/:id', function (req, res) {
    res.json(products.find(function (product) {
        return product.id == req.params.id;
    }));
});
app.get('/api/product/:id/comments', function (req, res) {
    res.json(comments.filter(function (comment) {
        return comment.productId == req.params.id;
    }));
});
var server = app.listen(8000, "localhost", function () {
    console.log("服务器已经启动，地址是http://localhost：8000");
});
var wsServer = new ws_1.Server({ port: 8085 });
wsServer.on("connection", function (websocket) {
    //在链接的情况下 向客户端推送消息
    websocket.send("这个代码是服务器主动推送的");
    //在链接的情况下 客户端向服务器发消息
    websocket.on("message", function (message) {
        console.log("接收到从客户端发来的消息" + message);
    });
});
setInterval(function () {
    if (wsServer.clients) {
        wsServer.clients.forEach(function (client) {
            client.send("这是定时推送");
        });
    }
}, 2000);
var Comment = /** @class */ (function () {
    function Comment(id, productId, times, user, rating, content) {
        this.id = id;
        this.productId = productId;
        this.times = times;
        this.user = user;
        this.rating = rating;
        this.content = content;
    }
    return Comment;
}());
exports.Comment = Comment;
var comments = [
    new Comment(1, 1, '2018年9月7日16:56:15', '1', 4, 'a a little gril'),
    new Comment(2, 1, '2018年9月7日16:57:45', '2', 5, 'a aa little gril'),
    new Comment(3, 2, '2018年9月7日16:57:50', '3', 5, 'a aaa little gril'),
    new Comment(4, 2, '2018年9月7日16:57:54', '4', 4, 'a aaaa little gril'),
    new Comment(5, 2, '2018年9月7日16:57:59', '5', 3, 'a aaaaa little gril'),
    new Comment(6, 1, '2018年9月7日16:58:03', '6', 2, 'a aaaaaa little gril'),
    new Comment(7, 1, '2018年9月7日16:58:07', '7', 1, 'a aaaaaaa little gril'),
];
//# sourceMappingURL=auction_server.js.map