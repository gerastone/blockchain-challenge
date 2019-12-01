import { Component, Input } from '@angular/core';
import * as moment from 'moment';
@Component({
    selector: 'donations-card',
    templateUrl: 'donations-card.component.html',
    styleUrls: ['donations-card.component.scss'],
})
export class DonationsCard {
    @Input('image')
    image = 'assets/imgs/img-donacion_1ampliada@3x.png'
    constructor() { }


    ngOnInit() {

    }


}
