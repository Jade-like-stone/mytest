import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../shared/product.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  cateqories:string[];
  formModel:FormGroup;
  constructor( private productService:ProductService) {
    let fb=new FormBuilder();
    this.formModel=fb.group({
      productTitle:['',[Validators.minLength(3),Validators.required]],
      productPrice:[null,this.biggerZero],
      productItem:['-1']
    })
  }

  ngOnInit() {
    this.cateqories=this.productService.getAllcateqories();
  }

  biggerZero(control:FormControl):any{
    if(!control.value){
      return null;
    }
    let price=parseInt(control.value);
    if(price>0){
      return null;
    }else {
      return {biggerZero:true};
    }
  }

  doSearch(){
    if(this.formModel.valid){
      console.log(this.formModel.value);
      this.productService.searchEvent.emit(
        this.formModel.value
      )
    }
  }
}
