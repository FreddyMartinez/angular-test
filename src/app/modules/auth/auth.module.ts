import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthFrameComponent, LoginComponent, SignUpComponent } from './components';


@NgModule({
  declarations: [
    AuthFrameComponent, 
    LoginComponent, 
    SignUpComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
