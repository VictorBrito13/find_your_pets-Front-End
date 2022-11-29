import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  public msgs:any[]
  public sender_name:string | null

  constructor() {
    this.sender_name = localStorage.getItem('name')
    this.msgs = []
  }

  ngOnInit(): void {
  }

}
