import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

import { HttpUsersService } from 'src/app/services/http-users/http-users.service'
import { Log_In_Info_Form, Log_In_Response } from 'src/app/interfaces/user'

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public errors: string[]
  public log_in: FormGroup<Log_In_Info_Form>

  constructor(
    private _router: Router,
    private _http: HttpUsersService
  ) {
    this.errors = []
    this.log_in = new FormGroup<Log_In_Info_Form>({
      email: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/)] }),
      password: new FormControl<string>('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)] })
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this._http.log_in(this.log_in.value).subscribe({
      next: (res:Log_In_Response) => {
        localStorage.setItem('token', res.token)
        this._router.navigate(['/pets/all-pets'])
      },
      error: err => {
        this.errors = []
        const error = err.error
        this.errors.push(error.error_msg)
      }
    })
  }

}
