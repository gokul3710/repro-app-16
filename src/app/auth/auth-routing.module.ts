import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthOneComponent } from './auth-one/auth-one.component';
import { AuthTwoComponent } from './auth-two/auth-two.component';

const routes: Routes = [
  {path: '', component: AuthOneComponent},
  {path: 'two', component: AuthTwoComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
