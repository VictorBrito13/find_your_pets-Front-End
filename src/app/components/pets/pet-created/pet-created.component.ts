import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pet-created',
  templateUrl: './pet-created.component.html',
  styleUrls: ['./pet-created.component.css']
})
export class PetCreatedComponent implements OnInit {

  @Output() pet_created_emitter = new EventEmitter<boolean>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onEmitClose(): void {
    this.pet_created_emitter.emit(false)
  }

}
