import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthFrameComponent, LoginComponent, SignUpComponent} from './components';

const routes: Routes = [
  { path:'', component: AuthFrameComponent, children: [
    { path:'login', component: LoginComponent },
    { path:'sign-up', component: SignUpComponent },
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
