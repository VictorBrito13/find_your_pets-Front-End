import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';

import { UsersComponent } from 'src/app/components/users/users/users.component';
import { UIComponentsModule } from '../../UI-components/ui-components.module';


@NgModule({
  declarations: [ UsersComponent ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    UIComponentsModule
  ]
})
export class UsersModule { }
