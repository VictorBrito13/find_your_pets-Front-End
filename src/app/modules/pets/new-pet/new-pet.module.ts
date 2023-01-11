import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewPetRoutingModule } from './new-pet-routing.module';
import { UIComponentsModule } from '../../UI-components/ui-components.module';

import { NewPetComponent } from 'src/app/components/pets/new-pet/new-pet.component';

@NgModule({
  declarations: [ NewPetComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIComponentsModule,
    NewPetRoutingModule
  ]
})
export class NewPetModule { }
