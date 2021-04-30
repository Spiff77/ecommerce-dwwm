import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() prod!: Product;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  clickOnMe(): void {
    console.log('You clicked on product');
  }

}
