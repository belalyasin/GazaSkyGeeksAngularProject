import { Injectable, OnInit } from '@angular/core';
import { Education } from '../models/education.model';
import { DropdownService } from './dropdown.service';

@Injectable({
  providedIn: 'root'
})
export class EducationsService {

  constructor(private dropDown: DropdownService) {
  }
  // ngOnInit(): void {
  //   console.log(this.dropDown.getMajors().find((x)=>{x.id==2}).name);
  // }
  majorDe :any;
  id:number[]=[];
  // name:string[]=[];
  // major= this.dropDown.getAll().subscribe(
  //   res=>{
  //     this.majorDe=res.majors
  //     this.id=res.majors.map((e:any)=>e.id)
      // this.name=res.majors.map((e:any)=>e.name)
      // this.major = res.majors.map((e:any)=>{e.id,e.name})
      // console.log(this.id,'id')
      // console.log(this.name,'name')
      // console.log(res.majors,'data')
      // console.log(this.majorDe,'maj')
    // }
  // );



  data:Education[]=[
    {
      id:1,
      major:this.dropDown.getMajors().find(x=>x.id==2).name,
      country:this.dropDown.getCountries().find(x=>x.id==1).name,
      city:this.dropDown.getCities(1).find(x=>x.id==1).name,
      university:this.dropDown.getUniversities(1).find(x=>x.id==3).name,
      startDate:new Date("2022-03-25"),
      endDate:new Date("2022-10-15"),
      presentStatus:'No'
    },
    {
      id:2,
      major:this.dropDown.getMajors().find(x=>x.id==1).name,
      country:this.dropDown.getCountries().find(x=>x.id==2).name,
      city:this.dropDown.getCities(2).find(x=>x.id==4).name,
      university:this.dropDown.getUniversities(2).find(x=>x.id==4).name,
      startDate:new Date("2022-03-25"),
      endDate:new Date("2022-10-15"),
      presentStatus:'No'
    },
    {
      id:3,
      major:this.dropDown.getMajors().find(x=>x.id==2).name,
      country:this.dropDown.getCountries().find(x=>x.id==1).name,
      city:this.dropDown.getCities(1).find(x=>x.id==1).name,
      university:this.dropDown.getUniversities(1).find(x=>x.id==1).name,
      startDate:new Date("2022-03-25"),
      endDate:new Date("2022-10-15"),
      presentStatus:'No'
    }
  ]

  getAll(){
    return this.data;
  }
  getById(index:any){
    return this.data.find(e=>e.id===index);
  }
  add(data:any){
    var body:Education={
      id:data.length+1,
      major:data.major,
      country:data.country,
      city:data.city,
      university:data.university,
      startDate:data.startDate,
      endDate:data.endDate,
      presentStatus:data.presentStatus
    }
    this.data.push(body);
  }
  update(index:any,obj:any){
    this.data[index]={
      id:obj.id,
      major:obj.major,
      country:obj.country,
      city:obj.city,
      university:obj.university,
      startDate:obj.startDate,
      endDate:obj.endDate,
      presentStatus:obj.presentStatus
    }
  }
  remove(id:any){
    this.data.splice(id,1);
  }
}
