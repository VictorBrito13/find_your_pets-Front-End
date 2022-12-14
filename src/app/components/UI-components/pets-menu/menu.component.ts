import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session/session.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-pets-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class PetsMenuComponent implements OnInit {
  public session: boolean

  constructor(
    private _session: SessionService,
    private _router: Router
  ) {
    this.session = false
  }

  ngOnInit(): void {
    this.session = this._session.onSession().session
  }

  log_out(): void {
    localStorage.removeItem('token')
    this._router.navigate(['/users/log-in'])
  }

}
