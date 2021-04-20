import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterIndividualPage } from './register-individual.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterIndividualPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterIndividualPageRoutingModule {}
