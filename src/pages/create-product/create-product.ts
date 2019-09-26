import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Product, Availability } from '../../models/interface-product';
import { ImagePicker, ImagePickerOptions, OutputType } from '@ionic-native/image-picker';


@IonicPage()
@Component({
  selector: 'page-create-product',
  templateUrl: 'create-product.html',
})
export class CreateProductPage {
  myProduct: Product;
  categories = [];
  cities = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public imagePicker: ImagePicker) {
    this.myProduct = {} as Product;
    this.myProduct.availability = {} as Availability;
    this.myProduct.pictures = [];
    this.categories = [
      {
        title: 'Vetements'
      },
      {
        title: 'Chaussures'
      },
      {
        title: 'Electroniques'
      },
      {
        title: 'Mode & Accessoires'
      }
    ];
    this.cities = [
      {
        name: 'Dakar'
      },
      {
        name: 'Thies'
      },
      {
        name: 'Kaolack'
      },
      {
        name: 'Mbour'
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateProductPage');
  }

  create(myProduct: Product){
    myProduct.id = '5';
    myProduct.createAt = new Date();
    myProduct.averageStar = 1;
    myProduct.availability.available = true;
    console.log('myProduct =', myProduct);
    
  }

  pickImages(){
    let options:ImagePickerOptions = {
      maximumImagesCount: 4,
      outputType: OutputType.FILE_URL
    }
    this.imagePicker.getPictures(options)
    .then((results)=>{
      console.log('Images =', results);
      this.myProduct.pictures = results;
    })
    .catch((error) => console.log('erreur', error)
    )
  }

}
