import { Component, OnInit } from '@angular/core';

import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  public session: boolean

  constructor(
    private _session: SessionService
  ) {
    this.session = false
  }

  ngOnInit(): void {
    this.session = this._session.onSession()
  }

}
