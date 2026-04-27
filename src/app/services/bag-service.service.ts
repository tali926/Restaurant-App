import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { DocumentModel } from '../models/document-model';

@Injectable({
  providedIn: 'root'
})
export class BagServiceService {

  constructor() { }

  private sum: number = 0;
  private arr: ProductModel[] = [];
  private list: DocumentModel[] = [];


  addToBag(product: ProductModel) {
    this.arr[this.arr.length ] = product;
    if (product.price == null)
      return;
    this.sum += product.price;

     this.list.push({ 
    name: product.name, 
    date: new Date(), 
    type: 'added' 
  });


  }

  removeFromBag(index: number) {

    this.list.push({ 
    name: this.arr[index].name, 
    date: new Date(), 
    type: 'removed' 

  })
  
  this.arr.splice(index, 1);
  }

  getAmountOfItems() {
    return this.arr.length;
  }

  getTotalPrice() {
    return this.sum;
  }

  getItems() {
    return this.arr;
  }
  getDocumentItems(){
    return this.list;
  }

}
