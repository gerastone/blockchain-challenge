import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/state/app.state';
import { ValidateItemAction } from '../../store/actions/home.action';
@Component({
    selector: 'track-detail-card',
    templateUrl: 'track-detail-card.component.html',
    styleUrls: ['track-detail-card.component.scss'],
})
export class TrackDetailCard {
    @Input('id') id: any;
    @Input('icon') icon: any;
    @Input('state') state: any;
    @Input('stateId') stateId: any;
    @Input('valid') valid: boolean = false;
    @Input('time') time: any;

    formatedDate: any;

    constructor(
        private store: Store<IAppState>,
    ) { }


    ngOnInit() {
    }

    public getFormattedDate() {
        return moment(new Date(this.time)).format('DD/MM/YYYY');
    }

    public validate() {
        this.store.dispatch(new ValidateItemAction({
            id: this.id,
            state: this.stateId,
            time: this.time
        }))
    }


}
