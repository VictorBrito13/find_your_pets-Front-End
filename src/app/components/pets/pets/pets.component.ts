import { Component, OnInit } from '@angular/core';

import { HttpPetsService } from 'src/app/services/http-pets/http-pets.service';
import { SessionService } from 'src/app/services/session/session.service';
import { Pet_Response } from 'src/app/interfaces/pets';

@Component({
  selector: 'app-pets',
  templateUrl: './pets.component.html',
  styleUrls: ['./pets.component.css']
})
export class PetsComponent implements OnInit {
  public session: boolean
  private token: string
  public pets: Pet_Response[]
  public url: string

  constructor(
    private _http: HttpPetsService,
    private _session: SessionService
  ) {
    this.session = false;
    this.token = ''
    this.pets = []
    this.url = this._http.get_url_dev()
  }

  ngOnInit(): void {
    const valid_session = this._session.onSession()
    this.session = valid_session.session
    this.token = valid_session.token || 'NO TOKEN'
    this.get_pets()
  }

  get_pets():void {
    this._http.get_pets(this.token).subscribe({
      next: res => {
        this.pets = res
      }
    })
  }

}
