import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-modal-card',
    templateUrl: 'modal-card.html',
    styleUrls: ['modal-card.scss'],

})
export class ModalCardComponent implements OnInit {



    constructor(private modalCtrl: ModalController) {

    }

    ngOnInit() {

    }

    close() {
        this.modalCtrl.dismiss();
    }

}