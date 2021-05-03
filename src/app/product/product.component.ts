import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() prod!: Product;
  @Output() evtem = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  clickOnMe(): void {
    this.evtem.emit(this.prod);
  }

}
