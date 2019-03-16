import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Product} from 'src/Product';
import { ProductproviderService } from '../productprovider.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

public id;
public name = 'our';
public title = 'products';
public product: Product[];
public tempProduct: Product[];

constructor(private productService: ProductproviderService) {
}

ngOnInit() {
  this.getProducts();
  }

getProducts() {
  this.productService.getProducts()
    .subscribe(products => this.product = products);
}
onSelect(product) {
   this.tempProduct = product;
 }
 onClick(id) {
  this.productService.addToCart(id);
 }
 
}
