import { Component } from '@angular/core';
import { /*IonicPage,*/ NavController, NavParams } from 'ionic-angular';
import {BandasService} from '../../providers/bandas-service';
import { AlertController } from 'ionic-angular';
import { MediaPlugin} from '@ionic-native/media';
import { MediaObject } from '@ionic-native/media';
import { Platform } from 'ionic-angular';

//@IonicPage()
@Component({
  selector: 'page-bandas',
  templateUrl: 'bandas.html',
})

export class BandasPage {

bandas: any[];
isTocando: boolean;
file: MediaObject;

  constructor(
    public platform: Platform,
    public navCtrl: NavController, 
              public navParams: NavParams,
              public bandasService: BandasService,
              public alertCtrl: AlertController,
              public media: MediaPlugin) {
                this.bandas = bandasService.getBandas();
                this.isTocando = false;
                this.file=null;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Bandas');
  }

musicaIniciarParar(codigo:number){
  if (this.isTocando){
      this.file.stop();
      this.isTocando = false;
  }else{
      this.file = this.media.create(this.bandasService.getMusica(codigo - 1));
      this.file.play();
      this.isTocando = true;
  }
}

  showConfirmLike(codigo:number) {
    let confirm = this.alertCtrl.create({
      title: 'Confirmação de Like',
      message: 'Tem certeza que deseja dar like para a banda '+ this.bandasService.getBandaNome(codigo - 1) +' ?' ,
      buttons: [
        {
          text: 'NÃO',
          handler: () => { }
        },
        {
          text: 'SIM',
          handler: () => { this.bandasService.setLike(codigo); }
        }
      ]
    });
    confirm.present();
  }

  showConfirmDeslike(codigo:number) {
    let confirm = this.alertCtrl.create({
      title: 'Confirmação de Deslike',
      message: 'Tem certeza que deseja dar deslike para a banda '+ this.bandasService.getBandaNome(codigo - 1) +' ?' ,
      buttons: [
        {
          text: 'NÃO',
          handler: () => { }
        },
        {
          text: 'SIM',
          handler: () => { this.bandasService.setDeslike(codigo); }
        }
      ]
    });
    confirm.present();
  }

}
