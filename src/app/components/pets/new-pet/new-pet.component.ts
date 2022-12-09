import { Component, OnInit } from '@angular/core';

import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
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
