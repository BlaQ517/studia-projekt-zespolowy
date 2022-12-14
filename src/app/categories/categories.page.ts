import { Component } from '@angular/core';
import {AddCategoryModalComponent} from '../shared/add-category-modal/add-category-modal.component';
import {ModalController} from '@ionic/angular';
import {ToastService} from '../_services/toast.service';
import {Category} from '../_models/Category.model';
import {StateService} from '../_services/state.service';

@Component({
  selector: 'app-categories',
  templateUrl: 'categories.page.html',
  styleUrls: ['categories.page.scss']
})
export class CategoriesPage {
  categories: Array<Category> = [];

  constructor(private modal: ModalController, private state: StateService, private toast: ToastService) {
    this.state.categories$.subscribe(categories => {
      this.categories = categories;
      console.log('categories', categories);
    });
  }

  async openAddCategoryModal() {
    const modal = await this.modal.create({
      component: AddCategoryModalComponent,
    });

    modal.present();
  }

  remove(uuid: string) {
    this.toast.show('Usunięto kategorię');
    this.state.removeCategory(uuid);
  }
}
