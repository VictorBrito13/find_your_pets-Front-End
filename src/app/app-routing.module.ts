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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
