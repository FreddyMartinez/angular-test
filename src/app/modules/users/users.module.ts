import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { UsersRoutingModule } from './users-routing.module';

import { MainFrameComponent, UsersComponent, LogoutComponent} from './components';
import { UsersService} from '@services/users.service';
import { httpInterceptorProviders} from '@interceptors/index'

import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [ 
    UsersComponent,
    LogoutComponent,
    MainFrameComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    UsersRoutingModule,
    NgxPaginationModule
  ],
  providers: [
    UsersService,
    httpInterceptorProviders
  ]
})
export class UsersModule { }
