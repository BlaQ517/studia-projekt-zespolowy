import { Component } from '@angular/core';
import {StateService} from '../_services/state.service';
import {Product} from '../_models/Product.model';
import {Storage} from "@ionic/storage";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  products: Array<Product>;

  constructor(private state: StateService, private storage: Storage) {
    this.state.products$.subscribe(products => {
      this.products = products;
    });

    this.storage.set('test', true);

    console.log('test', this.storage.get('test'));
  }
}
