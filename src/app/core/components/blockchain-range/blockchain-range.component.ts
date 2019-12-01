import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonRange } from '@ionic/angular';

@Component({
    selector: 'blockchain-range',
    templateUrl: 'blockchain-range.component.html',
    styleUrls: ['./blockchain-range.component.scss']
})
export class BlockchainRangeComponent implements OnInit, AfterViewInit {

    @Input('min') minValue: number = 0;
    @Input('max') maxValue: number = 1000;
    @Input('color') color: string = 'light';
    @Input('dualKnobs') dualKnobs: boolean = true;
    @ViewChild('range', {static: false}) range: IonRange; 

    @Input() model: number;
    @Output() modelChange = new EventEmitter<number>();
    value: {
        lower: number,
        upper: number,
    };

    constructor() { }

    ngOnInit() { 
        this.value = {
            lower: this.minValue,
            upper: this.maxValue
        }
    }
    
    ngAfterViewInit() {
        
    }

    changed($event) {
    }

    getValue() {
        return this.value + 'Km';
    }

    

}