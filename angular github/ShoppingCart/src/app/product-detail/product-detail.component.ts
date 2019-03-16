import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ProductproviderService } from '../productprovider.service';
import { Product } from 'src/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

tempProduct: any = [];
public product;

constructor(
    private route: ActivatedRoute,
    private productService: ProductproviderService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.getProducts();
  }

getProducts(): void {
  const id = +this.route.snapshot.paramMap.get('id');
  this.productService.getProduct(id)
    .subscribe(product => this.product = product);
}
goBack() {
  this.location.back();
}
 onClick(id) {
   this.productService.addToCart(id);
 }
}
