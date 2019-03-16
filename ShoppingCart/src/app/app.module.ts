import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { StyledComponentsModule } from 'angular-styled-components';

import { PaypalAngularModule, PaypalAppConfigModel } from 'paypal-angular';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductListComponent } from './product-list/product-list.component';

import { CartComponent } from './cart/cart.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { RoutingModule } from './app-routing.module';
import { ProductproviderService } from './productprovider.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ModelComponent } from './model/model.component';
import { PaypalComponent } from './paypal/paypal.component'

const paypalConfig: PaypalAppConfigModel = {
  sandbox: 'AXp-1fcThsaWCrcED6zAMtlVD6CCT-ofbbTSYpBJCfap5v94URip91yy-xllRgu356HGyBQi6spd7SCm',
  production: '...YOUR-PAYPAL-CLIENT-ID-PRODUCTION...'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ProductListComponent,
    CartComponent,
    PagenotfoundComponent,
    ProductDetailComponent,
    ModelComponent,
    PaypalComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    StyledComponentsModule,
    PaypalAngularModule.forRoot(paypalConfig)
],
  providers: [ProductproviderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
