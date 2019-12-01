import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'blockchain-button',
    templateUrl: 'blockchain-button.component.html',
    styleUrls: ['blockchain-button.component.scss']
})
export class BlockchainButtonComponent implements OnInit {

    constructor() { }

    ngOnInit() {

    }

    @Input('label') label: string;
    @Input('icon') icon: string;
    @Input('secondary') secondary: boolean = false;
    @Input('primary') primary: boolean = true;
    @Input('disabled') disabled: boolean = false;
    @Input('transparent') transparent: boolean = false;
    @Output('onClick') onClickEvent: EventEmitter<void> = new EventEmitter<void>();

    onClick(event) {
        this.onClickEvent.emit();
    }
}