import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationStaticsComponent } from './component/application-statics/application-statics.component';
import { FoldersStaticsComponent } from './component/folders-statics/folders-statics.component';
import { JobsStaticsComponent } from './component/jobs-statics/jobs-statics.component';
import { JobseekersStaticsComponent } from './component/jobseekers-statics/jobseekers-statics.component';
import { UsersStaticsComponent } from './component/users-statics/users-statics.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'jobseekers-statics',
    pathMatch:'full'
  },
  {
    path:'jobseekers-statics',
    component:JobseekersStaticsComponent
  },
  {
    path:'jobs-statics',
    component:JobsStaticsComponent
  },
  {
    path:'applications-statics',
    component:ApplicationStaticsComponent
  },
  {
    path:'users-statics',
    component:UsersStaticsComponent
  },
  {
    path:'folders-statics',
    component:FoldersStaticsComponent
  },
  {
    path:'**',
    redirectTo:'jobseekers-statics',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
