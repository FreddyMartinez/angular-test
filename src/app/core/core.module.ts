import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthGuard, AuthService} from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class CoreModule { }
