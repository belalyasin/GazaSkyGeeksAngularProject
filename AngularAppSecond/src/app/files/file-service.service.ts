import { Injectable } from '@angular/core';
import { File } from './fileInterface';

@Injectable({
  providedIn: 'root'
})
export class FileServiceService {
  constructor() { }
  fileArr:File[]=[
    {
    id:"1",
    name:"Angular File",
    description:"******************"
    },
    {
      id:"2",
      name:"Java Secript File",
      description:"******************"
      },
    {
      id:"3",
      name:"React Js File",
      description:"******************"
    },
    {
      id:"4",
      name:"Vue Js File",
      description:"******************"
    },
    {
      id:"5",
      name:"Web File",
      description:"******************"
    },
  ];
  getFiles(){
    return this.fileArr;
  }
}

