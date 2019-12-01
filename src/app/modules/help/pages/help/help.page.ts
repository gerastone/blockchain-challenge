import { Component, HostListener, ViewChild } from '@angular/core';
import { IAppState } from 'src/app/core/store/state/app.state';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-help',
  templateUrl: 'help.page.html',
  styleUrls: ['help.page.scss'],
})
export class HelpPage {
  constructor(private store: Store<IAppState>) { }



}
