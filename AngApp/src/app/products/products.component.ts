import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products = [

    { id: 1, name: 'Watch', price: 1000, color: 'brown', available: 'Not Available', image: '' },
    { id: 2, name: 'Smart TV', price: 34000, color: 'black', available: 'Available', image: '' },
    { id: 3, name: 'Mobile Phone', price: 25000, color: 'blue', available: 'Available', image: '' },
    { id: 4, name: 'Laptop', price: 40000, color: 'white', available: 'Not Available', image: '' },
    { id: 5, name: 'Refrigerator', price: 30000, color: 'grey', available: 'Available', image: '' },

  ]

}
