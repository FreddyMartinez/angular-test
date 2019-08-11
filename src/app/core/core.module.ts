import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AuthGuard, AuthService} from './services';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
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
