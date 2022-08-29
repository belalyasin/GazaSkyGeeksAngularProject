import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'user',
    loadChildren:()=>import('./users/users.module').then(u=>u.UsersModule)
  },
  {
    path:'file',
    loadChildren:()=>import('./files/files.module').then(f=>f.FilesModule)
  },
  // {
  //   path:'**',
  //   pathMatch:'full',
  //   redirectTo:''
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
