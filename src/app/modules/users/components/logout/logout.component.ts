import { Component, OnInit } from '@angular/core';

import { Store } from '@ngxs/store';
import { Logout} from '@core-store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(
    private store: Store,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.store.dispatch(new Logout()).subscribe(
      () => {
        this.router.navigate(['./login']);
      }
    );
  }

}
