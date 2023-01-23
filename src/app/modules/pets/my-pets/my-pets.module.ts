import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MyPetsComponent } from 'src/app/components/pets/my-pets/my-pets.component';
import { MyPetsRoutingModule } from './my-pets-routing.module';
import { UIComponentsModule } from '../../UI-components/ui-components.module';


@NgModule({
  declarations: [ MyPetsComponent ],
  imports: [
    CommonModule,
    MyPetsRoutingModule,
    UIComponentsModule
  ]
})
export class MyPetsModule { }
