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
      majorId:2,
      countryId:1,
      cityId:1,
      universityId:3,
      startDate:"2022-03-25",
      endDate:"2022-10-15",
      presentStatus:false
    },
    {
      id:2,
      majorId:1,
      countryId:2,
      cityId:4,
      universityId:5,
      startDate:"2022-03-25",
      endDate:"2022-10-15",
      presentStatus:true
    },
    {
      id:3,
      majorId:2,
      countryId:1,
      cityId:1,
      universityId:1,
      startDate:"2022-03-25",
      endDate:"2022-10-15",
      presentStatus:false
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
      id:this.data.length+1,
      majorId:data.major,
      countryId:data.country,
      cityId:data.city,
      universityId:data.university,
      startDate:data.startDate,
      endDate:data.endDate,
      presentStatus:data.presentStatus
    }
    console.log(body)
    this.data.push(body);
  }
  update(index:any,obj:any){
    this.data[index]={
      id:obj.id,
      majorId:obj.major,
      countryId:obj.country,
      cityId:obj.city,
      universityId:obj.university,
      startDate:obj.startDate,
      endDate:obj.endDate,
      presentStatus:obj.presentStatus
    }
  }
  remove(id:any){
    this.data.splice(id,1);
  }
}
