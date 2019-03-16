import { Observable, of } from 'rxjs';
import { Injectable, Output, EventEmitter } from '@angular/core';
import { Product} from '../Product';
import { Router } from '@angular/router';
import { storeProducts } from '../app/storeProducts';

@Injectable({
  providedIn: 'root'
})
export class ProductproviderService {
  public cart: Product[] = [];
  public product;
  public tempProduct;
  public item;
  public total = 0;
  public tax = 0;
  public gTotal = 0;
  public index;
  public decrementItem;
  public count = 0;
  public cartCount = 0;
  public itemId;

  getProducts(): Observable<Product[]> {
    return of (storeProducts);
}

getProduct(id: number): Observable<Product> {
    return of(storeProducts.find(product => product.id === id));
  }
  constructor(private router: Router) {
  }

addToCart(id) {
    this.tempProduct = storeProducts;
    console.log(this.tempProduct);
    this.index = this.tempProduct.map( x => {
      return x.id;
    }).indexOf(id);
     this.product = this.tempProduct[this.index];
      this.product.inCart = true;
      this.product.count = 1;
      const price = this.product.price;
      this.product.total = price;
      this.cart.push(this.product);

      this.index = this.cart.map(x => {
        return x.id;
      }).indexOf(id);

     this.item = [...this.cart];

      const index = this.item.map(x => {
        return x.id;
      }).indexOf(id);
      this.total = this.total + this.item[index].price;
      this.tax = this.tax + this.item[index].price * 7 / 100;
      this.gTotal = this.gTotal + this.item[index].price + this.item[index].price * 7 / 100;
}
  itemDecrement(id) {
    const index = this.cart.map(x => {
      return x.id;
    }).indexOf(id);
    if (this.cart[index].count === 1) {
      return null;
    }
     this.cart[index].count--;
     this.total = this.total - this.cart[index].price;
     this.tax = this.tax - this.cart[index].price * 7 / 100;
     this.gTotal = this.gTotal - this.cart[index].price - this.cart[index].price * 7 / 100;

    if (this.cart[index].count === 0) {
        this.cart[index].count = 1;
        this.gTotal = this.total + this.cart[index].price * 7 / 100;
    }
  }

 itemIncrement(id) {
  const index = this.cart.map(x => {
    return x.id;
  }).indexOf(id);

  this.cart[index].count++;
  this.total = this.total + this.cart[index].price;
  this.tax = this.tax + this.cart[index].price * 7 / 100;
  this.gTotal = this.gTotal + this.cart[index].price + this.cart[index].price * 7 / 100;
}
 itemToRemove(id) {
    const index = this.cart.map(x => {
    return x.id;
  }).indexOf(id);
  for (let i = this.cart[index].count; i >= 1 ; i--) {
    this.total = this.total - this.cart[index].price;
    this.tax = this.tax - this.cart[index].price * 7 / 100;
    this.gTotal = this.gTotal - this.cart[index].price - this.cart[index].price * 7 / 100;
}
this.cart.splice(index, 1);
const temp = this.tempProduct.map(x => {
  return x.id;
}).indexOf(id);
console.log(this.tempProduct);
this.tempProduct[temp].inCart = false;

  if (this.cart.length === 0) {
    window.location.reload();

  }
 }
 emptyCart() {
  this.cart.length = 0;
  window.location.reload();
  this.router.navigateByUrl('/RefrshComponent',
  {skipLocationChange: true}).then(() =>
  this.router.navigate(['/product']));
 }
}
