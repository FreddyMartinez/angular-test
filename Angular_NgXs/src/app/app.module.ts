import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SetNameComponent } from './components/set-name/set-name.component';
import { GetNameComponent } from './components/get-name/get-name.component';
import { NameState } from './store/name.state';

@NgModule({
  declarations: [
    AppComponent,
    SetNameComponent,
    GetNameComponent
  ],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([
      NameState
    ]),
    AppRoutingModule,
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
