import { Injectable } from '@angular/core';
import { User } from './userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  data:User[]=[
    {
    id:"0",
    name:"Belal Abu Hatab",
    birthdate:"5-8-2001",
    email:"belal@admin.com",
    phone:"+972598667924",
    address:"Gaza"
  },
  {
    id:"1",
    name:"Ahmed Sameer",
    birthdate:"19-12-2000",
    email:"ahmed@admin.com",
    phone:"+972599754621",
    address:"Gaza"
  },
  {
    id:"2",
    name:"Mohamed Yasin",
    birthdate:"3-9-2003",
    email:"mohammed@admin.com",
    phone:"+972593459871",
    address:"Gaza"
  },
  {
    id:"3",
    name:"Amr Ahmed",
    birthdate:"10-5-2002",
    email:"amr@admin.com",
    phone:"+972592873497",
    address:"Gaza"
  },
];
  getalluser():any{
    return this.data;
  }
  getUserById(index:any):User{
  return this.data.find(e=>e.id===index);

  }
  addUser(data:any):void{
    var body:User={
      id:this.data.length+1+"",
      name:data.name,
      birthdate:data.birthdate,
      email:data.email,
      phone:data.phone,
      address:data.address
    }
    this.data.push(body);
  }
  updateUser(index:any,obj:any):void{
    this.data[index]={
      id:obj.id,
      name:obj.name,
      birthdate:obj.birthdate,
      email:obj.email,
      phone:obj.phone,
      address:obj.address
    }
  }

  removeUser(id:any):void{
    // console.log(id)
    this.data.splice(id,1);
  }
}
