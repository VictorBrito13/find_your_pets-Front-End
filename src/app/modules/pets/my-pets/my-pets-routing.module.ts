import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MyPetsComponent } from 'src/app/components/pets/my-pets/my-pets.component';

const routes: Routes = [{
    path: 'my-pets',
    component: MyPetsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyPetsRoutingModule { }
