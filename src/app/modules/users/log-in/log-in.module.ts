import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LogInRoutingModule } from './log-in-routing.module';
import { LogInComponent } from 'src/app/components/users/log-in/log-in.component';


@NgModule({
  declarations: [ LogInComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LogInRoutingModule
  ]
})
export class LogInModule { }
