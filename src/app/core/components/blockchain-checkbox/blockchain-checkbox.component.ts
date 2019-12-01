import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'blockchain-checkbox',
    templateUrl: 'blockchain-checkbox.component.html',
    styleUrls: ['blockchain-checkbox.component.scss']
})
export class BlockchainCheckboxComponent implements OnInit {

    constructor() { }

    @Input('value') values: boolean;
    @Input('label') label: string;
    @Input('bolderLabel') bolderLabel: boolean = false;
    @Output('onSelect') onSelect: EventEmitter<boolean> = new EventEmitter();
    
    selected: boolean = null;

    ngOnInit() {
    }

}