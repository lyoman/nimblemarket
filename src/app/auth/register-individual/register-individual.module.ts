import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterIndividualPageRoutingModule } from './register-individual-routing.module';

import { RegisterIndividualPage } from './register-individual.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterIndividualPageRoutingModule
  ],
  declarations: [RegisterIndividualPage]
})
export class RegisterIndividualPageModule {}
