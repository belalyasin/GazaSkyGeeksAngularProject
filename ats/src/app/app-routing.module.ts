import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SettingsModule } from './settings/settings.module';
import { UsersModule } from './users/users.module';
import { SearchModule } from './search/search.module';
import { JobseekersModule } from './jobseekers/jobseekers.module';
import { InterviewsModule } from './interviews/interviews.module';
import { JobsModule } from './jobs/jobs.module';
import { FoldersModule } from './folders/folders.module';
import { CompaniesModule } from './companies/companies.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { SharedModule } from './shared/shared.module';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'dashboard'
  },
  {
    path:'shared',
    loadChildren:()=>import('./shared/shared.module').then(m=>SharedModule)
  },
  {
    path:'companies',
    loadChildren:()=>import('./companies/companies.module').then(m=>CompaniesModule)
  },
  {
    path:'dashboard',
    loadChildren:()=>import('./dashboard/dashboard.module').then(m=>DashboardModule)
  },
  {
    path:'folders',
    loadChildren:()=>import('./folders/folders.module').then(m=>FoldersModule)
  },
  {
    path:'jobs',
    loadChildren:()=>import('./jobs/jobs.module').then(m=>JobsModule)
  },
  {
    path:'interviews',
    loadChildren:()=>import('./interviews/interviews.module').then(m=>InterviewsModule)
  },
  {
    path:'jobseekers',
    loadChildren:()=>import('./jobseekers/jobseekers.module').then(m=>JobseekersModule)
  },
  {
    path:'search',
    loadChildren:()=>import('./search/search.module').then(m=>SearchModule)
  },
  {
    path:'settings',
    loadChildren:()=>import('./settings/settings.module').then(m=>SettingsModule)
  },
  {
    path:'users',
    loadChildren:()=>import('./users/users.module').then(m=>UsersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
