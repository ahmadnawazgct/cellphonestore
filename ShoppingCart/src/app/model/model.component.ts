import { Component, OnInit, Input} from '@angular/core';
import { Product } from 'src/Product';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
@Input () data: Product;

constructor(
  private location: Location,
  private router: Router
  ) {}

  ngOnInit() {}

goBack() {
  this.router.navigateByUrl('/RefrshComponent',
  {skipLocationChange: true}).then(() =>
this.router.navigate(['/product']));
  }
}
