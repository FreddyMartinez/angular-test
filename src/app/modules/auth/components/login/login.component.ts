import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from '@models/user.model';
import { AuthService} from '@core-services/auth.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Messages } from '@util/messages';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  user: User;
  private authSubsription: Subscription; 
  
  constructor(
    private authService: AuthService,
    private toastr: ToastrService
  ) { 
    this.user = new User();
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if(this.authSubsription) this.authSubsription.unsubscribe();
  }

  login() {
    this.authSubsription = this.authService.login(this.user).subscribe(
      data =>{
        console.log(data);
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
