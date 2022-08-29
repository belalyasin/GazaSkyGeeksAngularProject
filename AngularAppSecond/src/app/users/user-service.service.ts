import { Injectable } from '@angular/core';
import { User } from './userInterface';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  user :User[]=[
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
  getUsers(){
    return this.user;
  }
  getUserById(index:any):User{
  return this.user.find(e=>e.id===index);

  }
  addUser(data:any):void{
    var body:User={
      id:this.user.length+1+"",
      name:data.name,
      birthdate:data.birthdate,
      email:data.email,
      phone:data.phone,
      address:data.address
    }
    this.user.push(body);
    console.log(this.user);
  }
  updateUser(index:any,obj:any):void{
    this.user[index]={
      id:obj.id,
      name:obj.name,
      birthdate:obj.birthdate,
      email:obj.email,
      phone:obj.phone,
      address:obj.address
    }
  }

  removeUser(id:any):void{
    console.log(id)
    // id=this.getUserById(id);
    this.user.splice(id,1);
    // this.user.splice(id,1);
  }
}
