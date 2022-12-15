import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewPetRoutingModule } from './new-pet-routing.module';
import { UIComponentsModule } from '../../UI-components/ui-components.module';

import { PetCreatedComponent } from 'src/app/components/pets/pet-created/pet-created.component';
import { NewPetComponent } from 'src/app/components/pets/new-pet/new-pet.component';



@NgModule({
  declarations: [ NewPetComponent, PetCreatedComponent  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIComponentsModule,
    NewPetRoutingModule
  ]
})
export class NewPetModule { }
