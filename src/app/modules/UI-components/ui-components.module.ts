import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PetsMenuComponent } from 'src/app/components/UI-components/pets-menu/menu.component';
import { PageNotFoundComponent } from 'src/app/components/UI-components/page-not-found/page-not-found.component';
import { NoSessionComponent } from 'src/app/components/UI-components/no-session/no-session.component';

@NgModule({
  declarations: [ PetsMenuComponent, PageNotFoundComponent, NoSessionComponent ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ PetsMenuComponent, NoSessionComponent ]
})
export class UIComponentsModule { }
