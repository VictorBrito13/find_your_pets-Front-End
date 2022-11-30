import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPetRoutingModule } from './new-pet-routing.module';
import { NewPetComponent } from 'src/app/components/pets/new-pet/new-pet.component';


@NgModule({
  declarations: [ NewPetComponent ],
  imports: [
    CommonModule,
    NewPetRoutingModule
  ]
})
export class NewPetModule { }
