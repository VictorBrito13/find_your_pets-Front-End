import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pet-created',
  templateUrl: './pet-created.component.html',
  styleUrls: ['./pet-created.component.css']
})
export class PetCreatedComponent implements OnInit {

  @Output() pet_created_emitter = new EventEmitter<boolean>()
  @Input() pet_id:string

  constructor() {
    this.pet_id = ''
  }

  ngOnInit(): void {
  }

  onEmitClose(): void {
    this.pet_created_emitter.emit(false)
  }

}
