import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

@Injectable()
export class DashboardEffects {
    constructor(
        private actions$: Actions,
        private store: Store<any>
    ) {

    }


}
