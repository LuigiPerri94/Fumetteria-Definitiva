import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrazionePageRoutingModule } from './registrazione-routing.module';

import { RegistrazionePage } from './registrazione.page';
import { TitoloDevskillComponent } from 'src/app/components/titolo-devskill/titolo-devskill.component';
import { BottoneCustomComponent } from 'src/app/components/bottone-custom/bottone-custom.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrazionePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrazionePage, TitoloDevskillComponent, BottoneCustomComponent]
})
export class RegistrazionePageModule {}
