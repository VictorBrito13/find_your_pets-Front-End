import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewPetRoutingModule } from './new-pet-routing.module';
import { UIComponentsModule } from '../../UI-components/ui-components.module';
import { NewPetComponent } from 'src/app/components/pets/new-pet/new-pet.component';



@NgModule({
  declarations: [ NewPetComponent ],
  imports: [
    CommonModule,
    UIComponentsModule,
    NewPetRoutingModule
  ]
})
export class NewPetModule { }
