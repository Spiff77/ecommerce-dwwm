import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  p1 = new Product(1, '1984', 'Book', 'lorem ipsum dolor sit', 14);
  p2 = new Product(2, 'The Beatles', 'Music', 'lorem ipsum dolor sit', 14);

  constructor() { }

  ngOnInit(): void {
  }

}
