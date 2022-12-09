import { FormControl } from "@angular/forms"

//*Pet contact
interface Pet_Contacts{
    cellphone: string
    email: string
}

//*Pet search
interface Pet_Search{
    name: string
    owner: string
    descripiton: string
    image: string
    contacts: Array<Pet_Contacts>
}

//*Chat
interface Chats{
    members: Array<{ _id: string, member_name: string }>
    chat_msgs: Array<{ sender_name: string, msg: string }>
}

//*User
export interface User{
    _id: string
    first_name: string
    last_name: string
    avatar: string
    email: string
    age: Date
    cellphone: string
    password: string
    pets_searching: Pet_Search[]
    chats: Chats[]
}

//*New User
export interface New_User{
    first_name: FormControl<User["first_name"]>
    last_name: FormControl<User["last_name"]>
    email: FormControl<User["email"]>
    age: FormControl<User["age"]>
    password: FormControl<User["password"]>
    cellphone: FormControl<User["cellphone"]>
}

//*Log_In_Response
export interface Log_In_Response{
    token: string
}

//*Log_In_Info
export interface Log_In_Info{
    email: string
    password: string
}

//*Log_In_Form
export interface Log_In_Info_Form{
    email: FormControl<Log_In_Info["email"]>
    password: FormControl<Log_In_Info["password"]>
}