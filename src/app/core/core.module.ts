import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard, AuthService} from './services';
import { NgxsModule } from '@ngxs/store';
import { AuthState } from  './store';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxsModule.forRoot([
      AuthState
    ]),
  ]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders{
    return{
      ngModule: CoreModule,
      providers: [AuthService, AuthGuard]
    }
  };
 }
