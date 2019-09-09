import { Component } from '@angular/core';
import { NavController, AlertController, AlertOptions, ActionSheetController, ActionSheetOptions } from 'ionic-angular';
import { DetailsPage } from '../details/details';
import { Product } from '../../models/interface-product';
import { ImageViewerController } from 'ionic-img-viewer';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Articles: Product[];
  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public ActionCtrl: ActionSheetController, public imageViewerCtrl: ImageViewerController) {
    //On simule le fait que les articles proviennent d'une base de données
    this.Articles = [
      {
        title: 'Ordinateur de Bureau',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        price: 75,
        category: 'Informatique',
        createAt: new Date(),
        state: 'neuf',
        city: 'Dakar',
        id: '1',
        averageStar: 4,
        availability: {
          available: true,
          type: 'Livraison',
          feed: 10
        },
        pictures: [
          'assets/imgs/product1/ordinateur.png',
          'assets/imgs/product1/pc.png',
          'assets/imgs/product1/tablette.jpg',
          'assets/imgs/product1/téléphone.png'
        ]
        
      },
      {
        title: 'Téléphone',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        price: 45,
        category: 'Mobile',
        createAt: new Date(),
        state: 'neuf',
        city: 'Kaolack',
        id: '2',
        averageStar: 5,
        availability: {
          available: true,
          type: 'Livraison',
          feed: 10
        },
        pictures: [
          'assets/imgs/product1/téléphone.png',
          'assets/imgs/product1/ordinateur.png',
          'assets/imgs/product1/pc.png',
          'assets/imgs/product1/tablette.jpg'
          
        ]

      },
      {
        title: 'PC',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        price: 450,
        category: 'Informatique',
        createAt: new Date(),
        state: 'neuf',
        city: 'Thies',
        id: '3',
        averageStar: 3,
        availability: {
          available: true,
          type: 'Livraison',
          feed: 20
        },
        pictures: [
          'assets/imgs/product1/pc.png',
          'assets/imgs/product1/ordinateur.png',
          'assets/imgs/product1/tablette.jpg',
          'assets/imgs/product1/téléphone.png'
        ]

      },
      {
        title: 'Tablette',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
        price: 55,
        category: 'Mobile',
        createAt: new Date(),
        state: 'neuf',
        city: 'Mbour',
        id: '4',
        averageStar: 5,
        availability: {
          available: true,
          type: 'Livraison',
          feed: 15
        },
        pictures: [
          'assets/imgs/product1/tablette.jpg',
          'assets/imgs/product1/ordinateur.png',
          'assets/imgs/product1/pc.png',
          'assets/imgs/product1/téléphone.png'
        ]

      }
    ]
  }

  showDetails(article: Product): void{
    this.navCtrl.push(DetailsPage, {data: article});
  }

  showImage(picture: any, event): void{
    event.stopPropagation();
     this.imageViewerCtrl.create(picture).present();
  }

}
