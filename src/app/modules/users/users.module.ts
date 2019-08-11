import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { MainFrameComponent, UsersComponent, LogoutComponent} from './components';
import { UsersService} from '@services/users.service';
import { httpInterceptorProviders} from '@interceptors/index'

@NgModule({
  declarations: [ 
    UsersComponent,
    LogoutComponent,
    MainFrameComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ],
  providers: [
    UsersService,
    httpInterceptorProviders
  ]
})
export class UsersModule { }
