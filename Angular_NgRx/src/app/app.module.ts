import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetNameComponent } from './components/get-name/get-name.component';
import { SetNameComponent } from './components/set-name/set-name.component';
import { environment } from '../environments/environment';

// NGRX
import { Store, StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { NameReducer } from './store/name.reducer';


@NgModule({
  declarations: [
    AppComponent,
    GetNameComponent,
    SetNameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ name: NameReducer}),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
