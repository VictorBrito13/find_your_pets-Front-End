import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetComponent } from 'src/app/components/pets/pet/pet.component';

const routes: Routes = [{
  path: 'pet/:pet_id',
  component: PetComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetRoutingModule { }
