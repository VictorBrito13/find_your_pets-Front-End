import { Component, OnInit } from '@angular/core';

import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  public session: boolean

  constructor(
    private _session: SessionService
  ) {
    this.session = false;
  }

  ngOnInit(): void {
    this.session = this._session.onSession()
  }

}
