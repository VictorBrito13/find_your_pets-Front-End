import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetsComponent } from 'src/app/components/pets/pets/pets.component';

const routes: Routes = [{
  path: 'all-pets',
  component: PetsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }
