import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './component/profile/profile.component';
import { JobseekersInfoComponent } from './component/jobseekers-info/jobseekers-info.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ExperiencesComponent } from './component/experiences/experiences.component';
import { EducationsComponent } from './component/educations/educations.component';
import { ExperienceAddComponent } from './component/experiences/experience-add/experience-add.component';
import { EducationAddComponent } from './component/educations/education-add/education-add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProfileComponent,
    JobseekersInfoComponent,
    ExperiencesComponent,
    EducationsComponent,
    ExperienceAddComponent,
    EducationAddComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ProfileModule { }
