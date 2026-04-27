import { Component } from '@angular/core';
import { ProductModel } from '../../models/product-model';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';
import { ItemsComponent } from './items/items.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private dialog: MatDialog) { }
  products: ProductModel[] = [
    { name: 'cheeze sticks', description: '1', picture: 'assets/images/a.jpg', price: 50, department: "starters" },
    { name: 'home bread', description: '2', picture: 'assets/images/ho.jpg', price: 32, department: "starters" },
    { name: 'reskes bread', description: '3', picture: 'assets/images/ra.jpg', price: 54, department: "starters" },
    { name: 'french freis', description: '4', picture: 'assets/images/fr.jpg', price: 42, department: "starters" },
    { name: 'Italian pizza', description: '5', picture: 'assets/images/b.png', price: 10, department: "Italian" },
    { name: 'pasta margarita', description: '6', picture: 'assets/images/pas.jpg', price: 40, department: "Italian" },
    { name: 'pesto pasta', description: '7', picture: 'assets/images/PESTO PASTA.png', price: 70, department: "Italian" },
    { name: 'pasta pino', description: '8', picture: 'assets/images/PASTA PINO.png', price: 68, department: "Italian" },
    { name: 'dark samon', description: '9', picture: 'assets/images/dar.jpg', price: 10, department: "sides" },
    { name: 'Asian salad', description: '10', picture: 'assets/images/asian salad.png', price: 64, department: "sides" },
    { name: 'peta salad', description: '11', picture: 'assets/images/peta salad.png', price: 58, department: "sides" },
    { name: 'onion soop', description: '12', picture: 'assets/images/ONION SOOP.png', price: 42, department: "sides" },
    { name: 'crispy samon', description: '13', picture: 'assets/images/CRISPY SALMON.png', price: 68, department: "fish" },
    { name: 'grilled tuna', description: '14', picture: 'assets/images/tu.jpg', price: 110, department: "fish" },
    { name: 'samon burger', description: '15', picture: 'assets/images/samon burger.png', price: 130, department: "fish" },
    { name: 'coke', description: '16', picture: 'assets/images/co.jpg', price: 15, department: "drinks" },
    { name: 'sprite', description: '17', picture: 'assets/images/sp.jpg', price: 15, department: "drinks" },
    { name: 'fanta', description: '18', picture: 'assets/images/fa.jpg', price: 15, department: "drinks" },
    { name: 'water', description: '19', picture: 'assets/images/WATER.png', price: 10, department: "drinks" },
    { name: 'brownies', description: '20', picture: 'assets/images/4.png', price: 52, department: "deserts" },
    { name: 'lemon cheeze cake', description: '21', picture: 'assets/images/LEMON CHEEZE CAKE.png', price: 48, department: "deserts" },
    { name: 'apple pye', description: '22', picture: 'assets/images/APPLE PYE.png', price: 48, department: "deserts" },
    { name: 'choclate fudge', description: '23', picture: 'assets/images/78.png', price: 48, department: "deserts" },
    { name: 'dubai chocalate', description: '24', picture: 'assets/images/du.jpg', price: 70, department: "deserts" },
    { name: 'aprol shpritz', description: '25', picture: 'assets/images/APRIL SPRITZ.png', price: 47, department: "alcohol" },
    { name: 'wisky', description: '26', picture: 'assets/images/WISKY.png', price: 36, department: "alcohol" },
    { name: 'blue beer', description: '27', picture: 'assets/images/BLUE BEER.png', price: 26, department: "alcohol" },
    { name: 'lemon coctail', description: '28', picture: 'assets/images/555.png', price: 47, department: "alcohol" },
    { name: 'bartenurah', description: '29', picture: 'assets/images/BARTENURA.png', price: 36, department: "alcohol" },







  ];

  openDialog(product: ProductModel) {
    this.dialog.open(DialogComponent, { data: product });
  }

}

