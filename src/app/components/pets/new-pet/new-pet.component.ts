import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

import { HttpPetsService } from 'src/app/services/http-pets/http-pets.service'
import { UploadFileService } from 'src/app/services/upload-file/upload-file.service';
import { SessionService } from 'src/app/services/session/session.service';
import { Pet_Form, Pet_Response } from 'src/app/interfaces/pets';

@Component({
  selector: 'app-new-pet',
  templateUrl: './new-pet.component.html',
  styleUrls: ['./new-pet.component.css']
})
export class NewPetComponent implements OnInit {
  public session: boolean
  private token:string
  private files_to_upload: File[]
  public valid_ext:boolean
  public contacts: Pet_Response["contacts"]
  public contact_errors: { email: boolean, cellphone: boolean }
  public pet_created: boolean
  public new_pet: FormGroup<Pet_Form>

  constructor(
    private _session: SessionService,
    private _http: HttpPetsService,
    private _upload_file: UploadFileService
  ) {
    this.session = false
    this.token = ''
    this.files_to_upload = []
    this.valid_ext = false
    this.contacts = []
    this.contact_errors = { email: true, cellphone: true }
    this.pet_created = false
    this.new_pet = new FormGroup<Pet_Form>({
      name: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      age: new FormControl(new Date(), { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[\d]*$/)] }),
      description: new FormControl('', { nonNullable: true, validators: [Validators.required] }),
      breed: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[a-z ]+$/i)] }),
      pet_type: new FormControl('', { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[a-z ]+$/i)] }),
      reward: new FormControl(0, { nonNullable: true, validators: [Validators.required, Validators.pattern(/^[\d]*$/)] }),
      contacts: new FormArray([new FormControl()])
    })
  }

  ngOnInit(): void {
    console.log(this.new_pet.value.contacts)
    const valid_session = this._session.onSession()
    this.session = valid_session.session
    this.token = valid_session.token || 'No token'
    this.contacts = <Pet_Response["contacts"]> this.new_pet.value.contacts
  }

  onSubmit(): void {
    this.new_pet.value.contacts?.shift()
    this._http.new_pet(this.new_pet.value, this.token).subscribe({
      next: res => {
        this.pet_created = true
        this.new_pet.reset()
        this.contacts = []
        this._upload_file.upload_image(`${this._http.get_url_dev()}/avatar/${res._id}`, this.files_to_upload, 'avatar')
        .then(res => {
          console.log(res)
        })
        .catch(err => console.log(err))
      },
      error: err => {
        console.log(err)
      }
    })
  }

  checkExt(file: string): boolean {
    const file_ext = file.split('.').pop()
    const valid_exts = ['jpeg', 'jpg', 'png', 'webp']
    return valid_exts.includes(file_ext || 'WOE')
  }

  onChange(event: Event): void {
    const target: HTMLInputElement = <HTMLInputElement> event.target
    this.files_to_upload = <Array<File>> <unknown> target.files
    this.valid_ext = this.checkExt(this.files_to_upload[0].name)
  }

  addContact(email:HTMLInputElement, cellphone:HTMLInputElement): void {
    const contact = {
      cellphone: cellphone.value,
      email: email.value
    }
    this.new_pet.controls.contacts?.push(new FormControl({ cellphone: contact.cellphone, email: contact.email }, { nonNullable: true }))
    this.contacts = <Pet_Response["contacts"]> this.new_pet.value.contacts
    email.value = ''
    cellphone.value = ''
  }

  removeContact(contact: number): void {
    this.new_pet.controls.contacts.removeAt(contact)
    this.contacts = <Pet_Response["contacts"]> this.new_pet.value.contacts
    console.log(this.new_pet.controls.contacts)
  }

  cellphoneWarnings(cellphone:string): void {
    const cellphone_reg = new RegExp(/^(\d){3}([ _-])?(\d){3}([ _-])?(\d){4}$/)
    this.contact_errors.cellphone = !cellphone_reg.exec(cellphone)
  }

  emailWarnings(email:string): void {
    const email_reg = new RegExp(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/)
    this.contact_errors.email = !email_reg.exec(email)
  }

  onClose(event: boolean): void {
    this.pet_created = event
  }

}
