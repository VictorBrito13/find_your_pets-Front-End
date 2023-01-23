import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdatePetComponent } from 'src/app/components/pets/update-pet/update-pet.component';

const routes: Routes = [{
  path: 'update-pet/:id',
  component: UpdatePetComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdatePetRoutingModule { }
