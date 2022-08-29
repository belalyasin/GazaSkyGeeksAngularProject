import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  // {
  //   path:'',
  //   pathMatch:'full',
  //   redirectTo:'viewuser'
  // },
  {
    path:'',
    component:UserlistComponent
  },
  {
    path:'adduser',
    component:AddUserComponent
  },
  {
    path:'edituser/:id',
    component:EditUserComponent
  },
  // {
  //   path:'**',
  //   pathMatch:'full',
  //   redirectTo:'viewuser'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
