import { Component, OnInit } from '@angular/core';
import { AppState } from 'app/store/app.reducer';
import { Store } from '@ngrx/store';
import { NameState } from 'app/store/name.reducer';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-get-name',
  templateUrl: './get-name.component.html',
  styleUrls: ['./get-name.component.sass']
})
export class GetNameComponent implements OnInit {

  public name: string;
  private subscriptionToName: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.subscribeToName();
  }

  ngOnDestroy() {
    this.subscriptionToName.unsubscribe();
  }

  public subscribeToName() {
    this.subscriptionToName = this.store.select('name').subscribe((nameState: NameState) => {
        this.name = nameState.name;
 
    });
  }


  

  

}
