import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ProductModel } from 'src/app/models/product-model';


@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  @Input() product!: ProductModel;
  @Output() itemClick = new EventEmitter<ProductModel>();

  onClick() {
    this.itemClick.emit(this.product);
  }
}

