import { Component, OnInit, OnDestroy } from '@angular/core';
import { UsersService } from '@services/users.service';
import { User } from '@models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Messages } from '@util/messages';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  public userList: User[];
  public p: number = 1;
  private usersSubsription: Subscription; 
  private deleteUserSubsription: Subscription; 

  constructor(
    private service: UsersService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  ngOnDestroy() {
    if(this.usersSubsription) this.usersSubsription.unsubscribe();
    if(this.deleteUserSubsription) this.deleteUserSubsription.unsubscribe();
  }

  getUsers() {
    this.usersSubsription = this.service.getUsers().subscribe(
      users => {
        this.userList = users as User[];
      },
      error => {
        this.toastr.error(Messages.msgGetUsersError);
      }
    );
  }

  deleteUser(id:string) {
    this.deleteUserSubsription = this.service.deleteUser(id).subscribe(
      () => {
        this.getUsers();
        this.toastr.success(Messages.msgDeleteUserSuccess);
      },
      error => {
        this.toastr.error(error);
      }
    )
  }
}
