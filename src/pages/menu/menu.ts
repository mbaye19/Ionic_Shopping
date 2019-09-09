import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Category } from '../../models/interface-category';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
  rootPage: any;
  categories: Category[];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.rootPage = HomePage;
    this.categories = [
      {
        title: 'Informatique',
        description: 'Description',
        icon: 'desktop'
      },
      {
        title: 'Mobile',
        description: 'Description',
        icon: 'phone-portrait'
      },
      {
        title: 'Mode & Accessoire',
        description: 'Description',
        icon: 'archive'
      },
      {
        title: 'Vetements',
        description: 'Description',
        icon: 'shirt'
      },
    ]
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

}
