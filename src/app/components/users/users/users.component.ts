import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { HttpUsersService } from 'src/app/services/http-users/http-users.service';
import { SessionService } from 'src/app/services/session/session.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public token: string
  public session: boolean
  public users: User[]
  public url: string

  constructor(
    private _session: SessionService,
    private _http: HttpUsersService
  ) {
    this.token = ''
    this.session = false
    this.url = ''
  }

  ngOnInit(): void {
    this.url = this._http.get_url_dev()
    const sessionInfo = this._session.onSession()
    this.token = sessionInfo.token || 'WOT'
    this.session = sessionInfo.session
    this.getUsers()
  }

  getUsers(): void {
    this._http.get_users(this.token).subscribe({
      next: res => {
        this.users = res
      },
      error: err => console.error(err)
    })
  }

  userTrack(index: number, user: User) {
    return user._id
  }

}
