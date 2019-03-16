import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ModelComponent } from './model/model.component';


const routes: Routes = [
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: 'product', component: ProductListComponent },
  { path: 'detail/:id', component: ProductDetailComponent },
  { path: 'model/:id', component: ModelComponent },
  { path: 'cart', component: CartComponent},
  { path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
