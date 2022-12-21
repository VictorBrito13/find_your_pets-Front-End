import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SessionService } from 'src/app/services/session/session.service';
import { HttpPetsService } from 'src/app/services/http-pets/http-pets.service';
import { Pet_Response } from 'src/app/interfaces/pets';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  public session: boolean
  private token:string
  public pet: Pet_Response
  public url: string

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _session: SessionService,
    private _http: HttpPetsService
  ) {
    this.session = false
    this.token = ''
    this.url = this._http.get_url_dev()
  }

  ngOnInit(): void {
    const valid_session = this._session.onSession()
    this.session = valid_session.session
    this.token = valid_session.token || 'NO TOKEN'
    this._activatedRoute.params.subscribe((params) => {
      const pet_id = params['pet_id']
      this.getPet(pet_id)
    })
  }

  getPet(pet_id: string): void {
    this._http.get_pet(this.token, pet_id).subscribe({
      next: res => {
        console.log(res)
        this.pet = res
      },
      error: err => {
        console.error(err)
      }
    })
  }

}
