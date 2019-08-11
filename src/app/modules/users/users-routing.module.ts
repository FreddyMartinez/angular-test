import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersComponent, LogoutComponent, MainFrameComponent} from './components';

const routes: Routes = [
  { path: '', component: MainFrameComponent, children: [
    { path: '', component: UsersComponent},
    { path: 'log-out', component: LogoutComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
