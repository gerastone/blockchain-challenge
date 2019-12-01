import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RouterGo } from 'src/app/core/store/actions/utility.action';
import { utilityState } from 'src/app/core/store/selectors/utility.selector';
import { IAppState } from 'src/app/core/store/state/app.state';

@Component({
    selector: 'app-filter',
    templateUrl: 'filter.page.html',
    styleUrls: ['./filter.page.scss']
})
export class FilterPage implements OnInit {

    loged: boolean;
    utility$ = this.store.pipe(select(utilityState));
    utilitySubscription: Subscription;
    labelsExample: string[] = [
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
        "TEST",
    ]
    constructor(private store: Store<IAppState>) { }

    ngOnInit() {
        this.utilitySubscription = this.utility$.subscribe(result => {
            this.loged = result && result.storage['loged'] ? true : false
        });

    }

    back($event) {
        this.store.dispatch(new RouterGo(
            {
                to:
                    { path: 'home' }
            }
        ))
    }

}