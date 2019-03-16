import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ProductproviderService } from '../productprovider.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/Product';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
@Input() public itemId;
@Output()
prodCount: EventEmitter<number> = new EventEmitter<number>();
public cartCount = 0;
public cart;
public itemIncr;
public itemdecrement;
public total;
public tax;
public gTotal;
public itemTotal;
public index;
public itemToRemove;
public deleteItem;

 constructor(private productService: ProductproviderService) {
   }

  ngOnInit() {
  this.getItem();
  this.index = this.productService.index;
  this.total = this.productService.total;
  this.tax = this.productService.tax;
  this.gTotal = this.productService.gTotal;
}
  getItem() {
   this.cart = this.productService.cart;
   this.cartCount = this.cart.length;
}

  onDecrement(id) {
    this.productService.itemDecrement(id);
    this.total = this.productService.total;
    this.tax = this.productService.tax;
    this.gTotal = this.productService.gTotal;
     }

  onIncrement(id) {
    this.productService.itemIncrement(id);
    this.total = this.productService.total;
    this.tax = this.productService.tax;
    this.gTotal = this.productService.gTotal;
    console.log(this.gTotal);
    }

  removeItem(id) {
     this.productService.itemToRemove(id);
     this.total = this.productService.total;
     this.tax = this.productService.tax;
     this.gTotal = this.productService.gTotal;
}
clearCart() {
   this.productService.emptyCart();
 }
}
