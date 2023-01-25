import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/UI-components/page-not-found/page-not-found.component';

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
        loadChildren: () => import('./modules/users/users/users.module').then(m => m.UsersModule)
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
      },
      {
        path: '',
        loadChildren: () => import('./modules/pets/my-pets/my-pets.module').then(m => m.MyPetsModule)
      },
      {
        path: '',
        loadChildren: () => import('./modules/pets/update-pet/update-pet.module').then(m => m.UpdatePetModule)
      }
    ]
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
