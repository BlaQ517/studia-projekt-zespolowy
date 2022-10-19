import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {State} from '../_models/State.model';
import {User} from '../_models/User.mode';
import {Product} from '../_models/Product.model';

// const cart = localStorage.getItem('cart');
// const favourites = localStorage.getItem('favourites');

@Injectable({
  providedIn: 'root'
})

export class StateService {
  state = new State(
    []
  );

  products$: BehaviorSubject<Array<Product>> = new BehaviorSubject(this.state.products);
  //user$: BehaviorSubject<User> = new BehaviorSubject(this.state.user);

  constructor() {
      console.log('stateservice construct');
      this.getProductsToState();
  }

  getProductsToState() {
    const products = JSON.parse(localStorage.getItem('products'));
    this.products$.next(products);
  }
}

