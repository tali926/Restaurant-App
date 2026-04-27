import { Component, inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductsComponent } from '../components/products/products.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { ProductModel } from '../models/product-model';
import { BagComponent } from '../components/bag/bag.component';
import { BagServiceService } from '../services/bag-service.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  constructor(public dialogRef: MatDialogRef<DialogComponent>,
   @Inject(MAT_DIALOG_DATA) public data: ProductModel,
   private bagService: BagServiceService 
) {}


  closeDialog(){
    this.dialogRef.close('');
  }
  addToBag(){
 this.bagService.addToBag(this.data);
 this.closeDialog();
  }
}



