import { Component, OnDestroy } from '@angular/core';
import { User } from '@models/user.model';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Messages } from '@util/messages';
import { Store } from '@ngxs/store';
import { Login} from '@core-store/auth.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnDestroy {

  user: User;
  private authSubsription: Subscription; 
  
  constructor(
    private store: Store,
    private router: Router,
    private toastr: ToastrService
  ) { 
    this.user = new User();
  }

  ngOnDestroy() {
    if(this.authSubsription) this.authSubsription.unsubscribe();
  }

  login() {
    this.authSubsription = this.store.dispatch(new Login(this.user)).subscribe(
      () =>{
        this.router.navigate(['./users'])
      },
      error => {
        if(error['error']['message']){
          this.toastr.error(error['error']['message'], Messages.msgErrorServer);
        }else{
          this.toastr.error(Messages.msgLoginError);
        }
      }
    );
  }
}
