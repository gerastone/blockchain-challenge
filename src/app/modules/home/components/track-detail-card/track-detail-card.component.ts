import { Component, Input } from '@angular/core';
import * as moment from 'moment';
@Component({
    selector: 'track-detail-card',
    templateUrl: 'track-detail-card.component.html',
    styleUrls: ['track-detail-card.component.scss'],
})
export class TrackDetailCard {
    @Input('icon') icon: any;
    @Input('state') state: any;
    @Input('valid') valid: boolean = false;
    @Input('time') time: any;

    constructor() { }


    ngOnInit() {

    }


}
