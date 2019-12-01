import { Component } from '@angular/core';
import { TAB_OPTIONS } from '../../app.config';
import { Store } from '@ngrx/store';
import { IAppState } from '../../store/state/app.state';
import { RouterGo } from '../../store/actions/utility.action';
@Component({
    selector: 'blockchain-footer-tabs',
    templateUrl: './blockchain-footer-tabs.component.html',
    styleUrls: ['./blockchain-footer-tabs.component.scss']
})

export class BlockchainFooterTabs {
    options = JSON.parse(JSON.stringify(TAB_OPTIONS));

    constructor(private store: Store<IAppState>) {

    }

    ngOnInit() {

    }

    changeTab(option) {
        this.options.forEach(_option => {
            if (option == _option) {
                _option.active = true;
                this.store.dispatch(new RouterGo(
                    {
                        to: { path: option.option }
                    }
                ))
            } else {
                _option.active = false;
            }
        })
    }

}