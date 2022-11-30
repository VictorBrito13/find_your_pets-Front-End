import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewPetComponent } from 'src/app/components/pets/new-pet/new-pet.component';

const routes: Routes = [{
  path: 'new-pet',
  component: NewPetComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewPetRoutingModule { }
