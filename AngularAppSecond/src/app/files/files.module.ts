import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilesRoutingModule } from './files-routing.module';
import { FileServiceService } from './file-service.service';
import { FilelistComponent } from './filelist/filelist.component';


@NgModule({
  declarations: [
    FilelistComponent
  ],
  imports: [
    CommonModule,
    FilesRoutingModule
  ],
  providers:[FileServiceService]
})
export class FilesModule { }
