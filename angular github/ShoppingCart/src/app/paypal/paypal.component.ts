import { Component, OnInit } from '@angular/core';
import { PaypalAppStyleModel, PaypalAppFundingModel, PaypalAngularService } from 'paypal-angular';
@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html'
})
export class PaypalComponent implements OnInit {
  payment: Function;
  onAuthorize: Function;
  locale = 'es_ES';
  env = 'sandbox';
  commit = true;
  style: PaypalAppStyleModel;
  funding: PaypalAppFundingModel;
 
  constructor (
    private paypalAngularService: PaypalAngularService
  ) {
    const paypal = this.paypalAngularService.getPaypalRef();
    this.style = {
      color: 'gold',
      layout: 'vertical'
    }
    this.payment = (data, actions) => {
      return actions.payment.create({
        payment: {
          transactions: [
            {
              amount: {
                total: 10,
                currency: 'USD'
              }
            }
          ]
        }
      });
    };
    this.onAuthorize = (data, actions) => {
      return actions.payment.execute().then((payment) => {
        // Do something when payment is successful.
        console.log('payment was successful');
      });
    };
  }

  ngOnInit() {}
}
