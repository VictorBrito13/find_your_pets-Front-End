import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { UIComponentsModule } from '../../UI-components/ui-components.module';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from 'src/app/components/users/sign-up/sign-up.component';


@NgModule({
  declarations: [ SignUpComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    UIComponentsModule,
    SignUpRoutingModule
  ]
})
export class SignUpModule { }
