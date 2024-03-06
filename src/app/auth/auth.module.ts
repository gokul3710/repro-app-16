import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthOneComponent } from './auth-one/auth-one.component';
import { AuthTwoComponent } from './auth-two/auth-two.component';


@NgModule({
  declarations: [
    AuthComponent,
    AuthOneComponent,
    AuthTwoComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
