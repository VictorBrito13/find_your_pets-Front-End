import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdatePetRoutingModule } from './update-pet-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { UpdatePetComponent } from 'src/app/components/pets/update-pet/update-pet.component';
import { UIComponentsModule } from '../../UI-components/ui-components.module';

@NgModule({
  declarations: [ UpdatePetComponent ],
  imports: [
    CommonModule,
    UpdatePetRoutingModule,
    ReactiveFormsModule,
    UIComponentsModule
  ]
})
export class UpdatePetModule { }
