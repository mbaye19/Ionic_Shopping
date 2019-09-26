import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events, ToastController, ToastOptions, ModalController } from 'ionic-angular';
import { Product } from '../../models/interface-product';
import { Storage } from '@ionic/storage';
import { itemCart } from '../../models/interface-itemCart';
import { CartPage } from '../cart/cart';
import { MethodProvider } from '../../providers/method/method';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage {

  productDetails : Product;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public event: Events, public storage: Storage,
              public toast: ToastController, public modal: ModalController,
              public method: MethodProvider) {
    this.productDetails = this.navParams.get('data');
    this.event.subscribe('star-rating:changed', (note: any) =>{
      console.log(note);
      
    })
  }

  goBack(): void{
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailsPage');
  }

  addToCart(productDetails: Product): void{
    let added : boolean = false
    //Si le panier est vide
    this.storage.get("Cart").then((data: itemCart[]) => {
      if (data === null || data.length === 0) {
        data = [];
        data.push({
          item: productDetails,
          qty: 1,
          amount: productDetails.price
        })
      }else{
        //Si le panier n'est pas vide
        for (let i = 0; i < data.length; i++) {
          const element : itemCart = data[i];
          if (productDetails.id === element.item.id) {
            //Le panier n'est pas vide et contient l'article
            element.qty += 1;
            element.amount += productDetails.price;
            added = true;
          }
          
        }
        if (!added) {
          //Le panier n'est pas vide et ne contient pas l'article
          data.push({
            item: productDetails,
            qty: 1,
            amount: productDetails.price
          })
        }
      }
      this.storage.set("Cart", data)
      .then(data => {
        let options : ToastOptions = {
          message: "Votre panier a été mis à jour",
          duration: 1500,
          showCloseButton: true,
          closeButtonText: "Fermer",
        };
        this.toast.create(options).present();
      })
      .catch(err => {
        console.log(err)
      })
    })
  }

  openCart(): void{
    this.modal.create(CartPage).present();
    
  }

  showImage(picture: any, event): void {
    //  event.stopPropagation();
    //   this.imageViewerCtrl.create(picture).present();
    return this.method.showImage(picture, event);
  }

}
