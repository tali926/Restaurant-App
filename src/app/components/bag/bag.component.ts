import { Component } from '@angular/core';
import { ProductModel } from '../../models/product-model';
import { BagServiceService } from '../../services/bag-service.service';


@Component({
  selector: 'app-bag',
  templateUrl: './bag.component.html',
  styleUrls: ['./bag.component.css']
})
export class BagComponent {

  bagItems: ProductModel[] = [];
constructor(private serviceBag: BagServiceService)
{
   this.bagItems = this.serviceBag.getItems();
}

  


removeItemFromBag(index:number)
{
this.serviceBag.removeFromBag(index);
this.bagItems = this.serviceBag.getItems();

}

getTotal() {
    return this.serviceBag.getTotalPrice();
  }
  getCount() {
    return this.serviceBag.getAmountOfItems();
  }
  


add(product: ProductModel) {
  this.serviceBag.addToBag(product);
}

  }