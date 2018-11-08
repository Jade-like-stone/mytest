import {EventEmitter, Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Http, URLSearchParams } from '@angular/http';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  searchEvent:EventEmitter<ProductSearchParams>=new EventEmitter();
  constructor( private http:HttpClient) {

  }
  /*private products :Product[]=[

    new Product(1,"第一课",1,1,"这是第一次课,今天是我第一次学习Angular",["网络教育","自学成才"]),
    new Product(2,"第二课",2,2,"这是第二次课,今天是我第一次学习Angular",["网络教育"]),
    new Product(3,"第三课",3,3,"这是第三次课,今天是我第一次学习Angular",["自学成才"]),
    new Product(4,"第四课",4,4,"这是第四次课,今天是我第一次学习Angular",["网络教育","自学成才"]),
    new Product(5,"第五课",5,5,"这是第五次课,今天是我第一次学习Angular",["自学成才"]),
    new Product(6,"第六课",6,4,"这是第六次课,今天是我第一次学习Angular",["网络教育"]),
    new Product(7,"第七课",7,3,"这是第七次课,今天是我第一次学习Angular",["成人高考"]),
    new Product(8,"第八课",9,2,"这是第八次课,今天是我第一次学习Angular",["网络教育"])

  ];*/
/*
  private  comments: Comment[] = [
    new Comment(1, 1, '2018年9月7日16:56:15', '莹莹1',4,'a a little gril'),
    new Comment(2, 1, '2018年9月7日16:57:45', '莹莹2',5,'a aa little gril'),
    new Comment(3, 2, '2018年9月7日16:57:50', '莹莹3',5,'a aaa little gril'),
    new Comment(4, 2, '2018年9月7日16:57:54', '莹莹4',4,'a aaaa little gril'),
    new Comment(5, 2, '2018年9月7日16:57:59', '莹莹5',3,'a aaaaa little gril'),
    new Comment(6, 1, '2018年9月7日16:58:03', '莹莹6',2,'a aaaaaa little gril'),
    new Comment(7, 1, '2018年9月7日16:58:07', '莹莹7',1,'a aaaaaaa little gril'),
  ];
*/

  // 获取所有的商品信息
/*
  getProducts(): Product[] {
    return this.products;
  }
*/
  getProducts(): Observable<Product[]> {
    // @ts-ignore
    return this.http.get('/api/products')
      .pipe(map(
        (res) => res
      ))
  }


  //根据商品id从数组中找出对应商品并返回
/*  getProduct(id:number) : Product{

    return this.products.find((product)=>{
      return product.id==id;
    })
  }*/
  getProduct(id:number) : Observable<Product>{

    return this.http.get<Product>('/api/product/'+id)
      .pipe(map(
        (res) => res
      ))

  }

  //返回所有分类信息
  getAllcateqories ():string[] {
return ["网络教育","自学成才","成人高考"]
}

  //根据商品的id返回商品所有的评论信息
  getCommentByProductId(id:number) :Observable <Comment[]>{


    return this.http.get<Comment[]>('/api/product/'+id+"/comments")
      .pipe(
        map((res)=>res)
      )

  }

  search(params:ProductSearchParams) :Observable<Comment[]>{

    return this.http.get<Comment[]>('/api/products/',{search:this.encodeParams(params)})
      .pipe(map(
        (res) => res
      ))
  }
  private encodeParams(params :ProductSearchParams){
    let result:URLSearchParams;
      result=Object.keys(params)
        .filter(key=>params[key])
        .reduce((sum:URLSearchParams,key:string)=>{
          sum.append(key,params[key]);
          return sum;
        },new URLSearchParams())
    return result;
    /*return Object.keys(params)
      .filter(key=>params[key])
      .reduce((sum:URLSearchParams,key:string)=>{
        sum.append(key,params[key]);
        return sum;
      },new URLSearchParams())*/
  }


}

export  class ProductSearchParams{
  constructor(
      public title:string,
      public price:number,
      public category:string
  ){

  }
}

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
