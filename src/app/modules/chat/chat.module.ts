import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatRoutingModule } from './chat-routing.module';
import { UIComponentsModule } from '../UI-components/ui-components.module';
import { ChatComponent } from 'src/app/components/chat/chat/chat.component';


@NgModule({
  declarations: [ ChatComponent ],
  imports: [
    CommonModule,
    UIComponentsModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
