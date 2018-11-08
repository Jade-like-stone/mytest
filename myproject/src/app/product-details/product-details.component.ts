import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

import {Comment, Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

     /*productTitle:string;
     productPrice:number;*/
     isCommentHidden:boolean=true;
     defaultRating:number=5;
     defaultComment:string='';
     product :Product;
     comment:Comment[];
  constructor(private routeInfo:ActivatedRoute,
              private productService:ProductService) { }

  ngOnInit() {
    /*this.routeInfo.params.subscribe((params:Params)=>(
      this.productTitle=params["prodTitle"],
        this.productPrice=params["prodPrice"]
      )
    );*/

    let productId:number=this.routeInfo.snapshot.params['productId'];
    /*this.product=this.productService.getProduct(productId);
    this.comment=this.productService.getCommentByProductId(productId);*/

    this.productService.getProduct(productId).subscribe(
      product=>this.product=product
    )

    this.productService.getCommentByProductId(productId).subscribe(
      comment=>this.comment=comment
    )
  }

  CreateNew(){
    let comment=new Comment(0,this.product.id,new Date().toDateString(),'someone',this.defaultRating,this.defaultComment);
    this.comment.unshift(comment);
    let sum=this.comment.reduce((sum,comment)=>sum+comment.rating,0);
    this.product.rating=sum/this.comment.length;
    this.defaultComment='';
    this.defaultRating=5;
    this.isCommentHidden=true;
  }

}
