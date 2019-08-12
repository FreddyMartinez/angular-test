import { Component, OnInit } from '@angular/core';
import { UsersService } from '@services/users.service';
import { User } from '@models/user.model';
import { ToastrService } from 'ngx-toastr';
import { Messages } from '@util/messages';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public userList: User[];
  public p: number = 1;

  constructor(
    private service: UsersService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().subscribe(
      users => {
        this.userList = users as User[];
      },
      error => {
        this.toastr.error(Messages.msgGetUsersError);
      }
    );
  }

  deleteUser(id:string) {
    this.service.deleteUser(id).subscribe(
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
