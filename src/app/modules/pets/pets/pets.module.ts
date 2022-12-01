import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetsRoutingModule } from './pets-routing.module';
import { UIComponentsModule } from '../../UI-components/ui-components.module';
import { PetsComponent } from 'src/app/components/pets/pets/pets.component';


@NgModule({
  declarations: [ PetsComponent ],
  imports: [
    CommonModule,
    UIComponentsModule,
    PetsRoutingModule
  ]
})
export class PetsModule { }
