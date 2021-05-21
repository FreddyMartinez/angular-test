import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'app/store/app.reducer';

import * as fromNameActions from '../../store/name.actions';

@Component({
  selector: 'app-set-name',
  templateUrl: './set-name.component.html',
  styleUrls: ['./set-name.component.sass']
})
export class SetNameComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  public setName(name: string) {
    const action = new fromNameActions.SetName(name);
    this.store.dispatch(action);
  }

  public resetName() {
    const action = new fromNameActions.ResetName();
    this.store.dispatch(action);
  }

}
