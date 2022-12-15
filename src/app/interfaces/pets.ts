import { FormControl, FormArray } from "@angular/forms"

//*Pet_Response
export interface Pet_Response {
    _id: string
    name: string
    age: Date
    description: string
    breed: string
    pet: string //*pet_type
    owner: unknown
    reward: number
    contacts: Array<{ cellphone:string | null, email:string | null }>
    image: string | null
}

//*Pet_Form
export interface Pet_Form{
    name: FormControl<Pet_Response["name"]>
    age: FormControl<Pet_Response["age"]>
    description: FormControl<Pet_Response["description"]>
    breed: FormControl<Pet_Response["breed"]>
    pet_type: FormControl<Pet_Response["pet"]>
    reward: FormControl<Pet_Response["reward"]>
    contacts: FormArray<FormControl<{ cellphone: string | null, email: string | null }> >
}