import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'users/log-in'
  },
  {
    path:'users',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/users/log-in/log-in.module').then(m => m.LogInModule)
      },
      {
        path: '',
        loadChildren: () => import('./modules/users/sign-up/sign-up.module').then(m => m.SignUpModule)
      },
      {
        path: '',
        loadChildren: () => import('./modules/chat/chat.module').then(m => m.ChatModule)
      }
    ],
  },
  {
    path:'pets',
    children: [
      {
        path: '',
        loadChildren: () => import('./modules/pets/pets/pets.module').then(m => m.PetsModule)
      },
      {
        path: '',
        loadChildren: () => import('./modules/pets/pet/pet.module').then(m => m.PetModule)
      },
      {
        path: '',
        loadChildren: () => import('./modules/pets/new-pet/new-pet.module').then(m => m.NewPetModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
