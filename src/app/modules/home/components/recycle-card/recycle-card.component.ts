import { Component, Input } from '@angular/core';
import * as moment from 'moment';
@Component({
    selector: 'recycle-card',
    templateUrl: 'recycle-card.component.html',
    styleUrls: ['recycle-card.component.scss'],
})
export class RecycleCard {
    @Input('track') track: any;
    state: string = '';
    icon: string = '';
    type: string = ''
    time: string = ''
    constructor() { }


    ngOnInit() {
        this.time = moment(new Date(this.track.currentState.timestamp)).format('DD/MM/YYYY');
        this.setState();
        this.setIcon();
    }

    setState() {
        switch (this.track.currentState.state) {
            case 1:
                this.state = 'TRACK.SCANNED';
                break;
            case 2:
                this.state = 'TRACK.IN_CONTAINER';
                break;
            case 3:
                this.state = 'TRACK.COLLECTED';
                break;
            case 4:
                this.state = 'TRACK.RECICLED';
                break
        }
    }

    setIcon() {

        switch (this.track.trashType) {
            case 1:
                this.type = 'TRASH.ORGANIC'
                this.icon = 'assets/imgs/ic_organic@3x.png'
                break;
            case 2:
                this.type = 'TRASH.PLASTIC'
                this.icon = 'assets/imgs/ic_envasos-plastic@3x.png'
                break;
            case 3:
                this.type = 'TRASH.PAPER'
                this.icon = 'assets/imgs/ic_paper@3x.png'
                break;
            case 4:
                this.icon = 'assets/imgs/ic_resta@3x.png'
                this.type = 'TRASH.REST'
                break
            case 5:
                this.type = 'TRASH.GLASS'
                this.icon = 'assets/imgs/ic_vidre@3x.png'
                break
        }
    }
}
