import { Injectable } from '@angular/core';
import { ActivationStart, Router, ActivatedRoute } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { filter, map, tap } from 'rxjs/operators';
import { EUtilityActions, RouterGo, RouterChange, ShowAlertAction } from './../actions/utility.action';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class UtilityEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private store: Store<any>,
        private alertController: AlertController,
        private translateService: TranslateService
    ) {

        this.listenToRouter();
    }

    @Effect({ dispatch: false })
    navigate$ = this.actions$.pipe(
        ofType(EUtilityActions.ROUTER_GO),
        map((action: RouterGo) => {
            return action.payload.to
        }),
        tap(({ path, queryParams, extras }) => {
            return this.router.navigate([path], { queryParams, ...extras })
        }),
    );


    private listenToRouter() {
        this.router.events.pipe(filter(event => event instanceof ActivationStart)).subscribe((event: ActivationStart) => {
            if (event.snapshot.routeConfig) {
                return this.store.dispatch(
                    new RouterChange({
                        params: { ...event.snapshot.params },
                        path: (event.snapshot.routeConfig.path != '') ? event.snapshot.routeConfig.path : event.snapshot.routeConfig.pathMatch
                    }),
                )
            } else {
                return [];
            }
        });
    }


    @Effect({ dispatch: false })
    alert$ = this.actions$.pipe(
        ofType(EUtilityActions.SHOW_ALERT),
        map(async (action: ShowAlertAction) => {
            let alert = await this.alertController.create({
                header: this.translateService.instant(action.payload.title),
                message: this.translateService.instant(action.payload.message),
                buttons: ['OK']
            })
            return alert.present();
        })
    );


}
