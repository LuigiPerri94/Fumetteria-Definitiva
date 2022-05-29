import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { TitoloDevskillComponent } from 'src/app/components/titolo-devskill/titolo-devskill.component';
import { BottoneCustomComponent } from 'src/app/components/bottone-custom/bottone-custom.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPage, TitoloDevskillComponent, BottoneCustomComponent]
})
export class LoginPageModule {}
