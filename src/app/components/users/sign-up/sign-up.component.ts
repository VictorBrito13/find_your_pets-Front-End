import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { HttpUsersService } from 'src/app/services/http-users/http-users.service';
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { User, New_User } from 'src/app/interfaces/user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  @ViewChild('cellphone_input') cellphone_input:any
  public valid_ext_avatar: boolean
  public errors: string[]
  public server_down:boolean
  private files: File[]
  public new_user: FormGroup<New_User>

  constructor(
    private _http: HttpUsersService,
    private _uploadFile: UploadFileService,
    private _router: Router
  ) {
    this.valid_ext_avatar = false
    this.errors = []
    this.server_down = false
    this.files = []
    this.new_user = new FormGroup<New_User>({
      first_name: new FormControl<User["first_name"]>('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[A-Zá-ú ]*$/i)] }),
      last_name: new FormControl<User["last_name"]>('', { nonNullable: true, validators:[Validators.required, Validators.pattern(/^[A-Zá-ú ]*$/i)] }),
      email: new FormControl<User["email"]>('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/)] }),
      age: new FormControl<User["age"]>(new Date('2000/01/00'), { nonNullable: true, validators: [Validators.required] }),
      password: new FormControl<User["password"]>('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)] }),
      cellphone: new FormControl<User["cellphone"]>('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^(\d){3}([ _-])?(\d){3}([ _-])?(\d){4}$/)] })
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void{
    this.format_cellphone(this.cellphone_input)
    this._http.new_user(this.new_user.value).subscribe({
      next: (res: User) => {
        this._uploadFile.upload_image(`http://localhost:31415/api/v1/users/avatar/${res._id}`, this.files, 'avatar')
        .then(res => {
          this._router.navigate(['/users/log-in'])
        })
      },
      error: (err) => {
        if(err.status === 0 || err.status >= 500) this.server_down = true
        const request_errors: string[] = Object.values(err.error)
        this.errors = request_errors
      }
    })
  }

  format_cellphone(element:ElementRef<HTMLInputElement>): void {
    let value = element.nativeElement.value
    let current_value = value.replaceAll(new RegExp(/[- _,.]/g), '')
    element.nativeElement.value = current_value
    this.new_user.value.cellphone = element.nativeElement.value
  }

  validate_extension(event:Event): void {
    const file_target = <HTMLInputElement>event.target
    const file_extension = file_target.value.split('.').pop()
    const valid_extensions = ['png', 'jpg', 'jpeg', 'webp']
    this.valid_ext_avatar = valid_extensions.includes(file_extension || 'WOE')
  }

  upload_avatar(event: Event): void{
    const target = <HTMLInputElement>event.target
    const files = target.files
    this.files = <Array<File>><unknown>files
  }

}
