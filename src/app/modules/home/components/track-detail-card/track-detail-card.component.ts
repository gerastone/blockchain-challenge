import { Component, Input } from '@angular/core';
import * as moment from 'moment';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/core/store/state/app.state';
import { ValidateItemAction } from '../../store/actions/home.action';
import { homeState } from '../../store/selectors/home.selector';
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
    home$ = this.store.select(homeState);
    validated = 0;

    constructor(
        private store: Store<IAppState>,
    ) { }


    ngOnInit() {
        this.home$.subscribe(result => {
            console.log(result)
            if (result.validated[this.time]) {
                this.validated = result.validated[this.time]
            }
        })
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
