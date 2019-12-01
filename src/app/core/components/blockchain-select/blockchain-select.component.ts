import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'blockchain-select',
    templateUrl: 'blockchain-select.component.html',
    styleUrls: ['blockchain-select.component.scss']
})
export class BlockchainSelectComponent implements OnInit {

    constructor() { }

    @Input('values') values: string[];
    @Input('label') label: string;
    @Output('onSelect') onSelect: EventEmitter<string> = new EventEmitter();
    selectedValue: string = null;

    ngOnInit() {
    }

    optionSelected($event: CustomEvent) {
        this.selectedValue = $event.detail.value;
        this.onSelect.emit($event.detail.value);
    }

}