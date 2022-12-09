import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PetsMenuComponent } from 'src/app/components/UI-components/pets-menu/menu.component';
import { PageNotFoundComponent } from 'src/app/components/UI-components/page-not-found/page-not-found.component';
import { NoSessionComponent } from 'src/app/components/UI-components/no-session/no-session.component';
import { ServerDownComponent } from 'src/app/components/UI-components/server-down/server-down.component';

@NgModule({
  declarations: [ PetsMenuComponent, PageNotFoundComponent, NoSessionComponent, ServerDownComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ PetsMenuComponent, NoSessionComponent, ServerDownComponent ]
})
export class UIComponentsModule { }
