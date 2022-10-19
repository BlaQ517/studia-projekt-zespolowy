import {User} from './User.mode';
import {Product} from './Product.model';

export class State {
  products: Array<Product>;
  //user: User;

  constructor(products: Array<Product>) {
    this.products = products;
  }

}
