import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ApplicationStaticsComponent } from './component/application-statics/application-statics.component';
import { FoldersStaticsComponent } from './component/folders-statics/folders-statics.component';
import { JobsStaticsComponent } from './component/jobs-statics/jobs-statics.component';
import { JobseekersStaticsComponent } from './component/jobseekers-statics/jobseekers-statics.component';
import { UsersStaticsComponent } from './component/users-statics/users-statics.component';


@NgModule({
  declarations: [
    ApplicationStaticsComponent,
    FoldersStaticsComponent,
    JobsStaticsComponent,
    JobseekersStaticsComponent,
    UsersStaticsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
