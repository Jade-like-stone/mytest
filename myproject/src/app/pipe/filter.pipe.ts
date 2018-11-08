import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {


  //        商品列表，过滤字段，用户输入的关键字
  transform(list: any[], flterFiled: string,keyword:string): any {
    if(!flterFiled || !keyword){
      return list;
    }
    return list.filter(item =>{
      let filedValue=item[flterFiled];
      return filedValue.indexOf(keyword)>=0;//字段中是否包含关键字
    })
  }



}
