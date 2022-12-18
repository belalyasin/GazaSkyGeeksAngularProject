import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { DropdownPerant } from '../models/dropdown-perant.models';
import { Dropdown } from '../models/dropdown.models';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {
  dropdownKey:string ='dropdown';
  constructor() { }
  getAll(): Observable<any>{
    let dropdowns :any={}
    dropdowns['countries']=[
      {id: 1, name: 'Palestin'},
      {id: 2, name: 'Jorden'}
    ];
    dropdowns['cities']=[
      {id: 1,name:'Gaza',perantId:1},
      {id: 2,name:'Nables',perantId:1},
      {id: 3,name:'Jeneen',perantId:1},
      {id: 4,name:'Amman',perantId:2},
      {id: 5,name:'Irbid',perantId:2},
    ];
    dropdowns['sector']=[
      { id: 1, name: 'IT And Management' },
      { id: 2, name: 'Accounting' },
    ];
    dropdowns['functionalArea']=[
      { id: 1, name: 'Computer Science' },
      { id: 2, name: 'Marketing' },
      { id: 3, name: 'Health Care' }
    ];
    dropdowns['jobType']=[
      {id: 1,name:'Part Time'},
      {id: 2,name:'Full Time'}
    ];
    dropdowns['nationality']=[
      {id: 1,name:'Palestinian'},
      {id: 2,name:'Lebanon'},
      {id: 3,name:'Jordanian'}
    ];
    dropdowns['educationLevel']=[
      { id: 1, name: 'Bachelor' },
      { id: 2, name: 'Master' },
      { id: 3, name: 'PhD' },
      { id: 4, name: 'Prof' },
    ];
    dropdowns['languages']=[
      { id: 1, name: 'Arabic' },
      { id: 2, name: 'English' },
    ];
    dropdowns['skills']=[
      { id: 1, name: 'FrontEnd Developer' },
      { id: 2, name: 'backEnd Developer' },
      { id: 2, name: 'Full Stack Developer' },
    ];
    dropdowns['benefits']=[
      { id: 1, name: 'Work From Home' },
      { id: 2, name: 'Health Insureance' },
      { id: 3, name: 'flexable Hours' },
    ];
    dropdowns['levels']=[
      {id: 1,name:'Advanced'},
      {id: 2,name:'Intermediate'},
      {id: 3,name:'Beginner'}
    ];
    dropdowns['status']=[
      { id: 1, name: 'active' },
      { id: 2, name: 'notActive' },
    ];
    dropdowns['majors']=[
      { id: 1, name: 'Softwar Development' },
      { id: 2, name: 'computer science' },
    ];
    dropdowns['universities']=[
      {id: 1,name:'Islamic University',perantId:1},
      {id: 2,name:'Al-Azhar University',perantId:1},
      {id: 3,name:'Al-Aqsa University',perantId:1},
      {id: 4,name:'Al-Najah University',perantId:2},
      {id: 5,name:'Berzite University',perantId:3},
      {id: 6,name:'Al-Israa University',perantId:4},
      {id: 7,name:'Al-Batra University',perantId:5},
    ];
    return of(dropdowns);
  }
  setDropdownInStorage(dropdown:any){
    localStorage.setItem(this.dropdownKey,JSON.stringify(dropdown));
  }
  getDropdown():any{
    return JSON.parse(localStorage.getItem(this.dropdownKey));
  }
  getCountries():Dropdown[]{
    return this.getDropdown()?.countries;
  }
  getCities(id:number,all:boolean=false):DropdownPerant[]{
    if(all){
      return this.getDropdown()?.cities;
    }
    if(this.getDropdown()?.cities){
      return this.getDropdown().cities.filter((value:any)=>value.perantId==id);
    }
    return null;
  }
  getSectors():Dropdown[]{
    return this.getDropdown()?.sector;
  }
  getFunctionalAreas():Dropdown[]{
    return this.getDropdown()?.functionalArea;
  }
  getJobType():Dropdown[]{
    return this.getDropdown()?.jobType;
  }
  getNationality():Dropdown[]{
    return this.getDropdown()?.nationality;
  }
  getEducationLevel():Dropdown[]{
    return this.getDropdown()?.educationLevel;
  }
  getLanguages():Dropdown[]{
    return this.getDropdown()?.languages;
  }
  getSkills():Dropdown[]{
    return this.getDropdown()?.skills;
  }
  getBenefits():Dropdown[]{
    return this.getDropdown()?.benefits;
  }
  getLevels():Dropdown[]{
    return this.getDropdown()?.levels;
  }
  getStatus():Dropdown[]{
    return this.getDropdown()?.status;
  }
  getMajors():Dropdown[]{
    return this.getDropdown()?.majors;
  }
  getUniversities(id:number,all:boolean=false):DropdownPerant[]{
    if(all){
      return this.getDropdown()?.universities;
    }
    if(this.getDropdown()?.universities){
      return this.getDropdown().universities.filter((value:any)=>value.perantId==id);
    }
    return null;
  }
}
