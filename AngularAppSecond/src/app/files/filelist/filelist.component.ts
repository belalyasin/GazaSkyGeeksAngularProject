import { Component, OnInit } from '@angular/core';
import { FileServiceService } from '../file-service.service';

@Component({
  selector: 'app-filelist',
  templateUrl: './filelist.component.html',
  styleUrls: ['./filelist.component.scss']
})
export class FilelistComponent implements OnInit {

  filedata: any[]=[];
  constructor(private fileservice:FileServiceService) { }

  ngOnInit(): void {
    this.filedata=this.fileservice.getFiles();
  }

}
