import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = [
    { name: 'Euphoria', price: 200.80 },
    { name: 'Pink Barbie', price: 195.60},
    { name: 'Summer', price: 120.00 },
    { name: 'Black Versace', price: 199.80 },
    { name: 'Weeknd', price: 180.60 },
    { name: 'Fine', price: 200.00 },
    { name: 'Bolsa Diesel', price: 2000.80 },
    { name: 'Bolsa Dolce & Gabbana', price: 500.50 },
    { name: 'Bolsa Versace', price: 1120.00 },

    
  ];
  selectedProduct: any = "Selecione";
}


 

