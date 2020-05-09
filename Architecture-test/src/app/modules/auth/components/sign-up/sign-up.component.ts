import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '@models/user.model';
import { AuthService} from '@core-services/auth.service';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { Messages } from '@util/messages';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnDestroy {

  public user: User;
  public secondPassword: string;
  private authSubsription: Subscription; 

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) { 
    this.user = new User();
  }

  ngOnDestroy() {
    if(this.authSubsription) this.authSubsription.unsubscribe();
  }

  register() {
    this.authSubsription = this.authService.register(this.user).subscribe(
      success =>{
        this.toastr.success(Messages.msgRegisterSuccess);
        setTimeout(() => {
          this.router.navigate(["/login"]);
        }, 1500);
      },
      error=>{
        if(error['error']['message']){
          this.toastr.error(error['error']['message'], Messages.msgErrorServer);
        }else{
          this.toastr.error(Messages.msgRegisterError);
        }
      }
    );
  }
}
