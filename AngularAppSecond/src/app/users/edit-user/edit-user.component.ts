import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { User } from '../userInterface';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
updateFG:FormGroup;
data:User;

constructor(private userService : UserServiceService,private router:ActivatedRoute,private route:Router) {
 this.initializeFG();

 var id= this.router.snapshot.paramMap.get('id');

  this.updateFG.setValue({
    id:this.userService.getUserById(id).id,
    name:this.userService.getUserById(id).name,
    birthdate:this.userService.getUserById(id).birthdate,
    email:this.userService.getUserById(id).email,
    phone:this.userService.getUserById(id).phone,
    address:this.userService.getUserById(id).address,
  });
  }

  id= this.router.snapshot.paramMap.get('id');

  onupdate(ID:any , obj:any):void{
    ID= this.router.snapshot.paramMap.get('id');
    // ID= this.userService.getUserById(ID).id;
    obj=this.data= {
      id:this.updateFG.value.id,
      name:this.updateFG.value.name,
      birthdate:this.updateFG.value.birthdate,
      email:this.updateFG.value.email,
      phone:this.updateFG.value.phone,
      address:this.updateFG.value.address
  };
  // console.log(ID)
  // console.log(obj)
    this.userService.updateUser(ID,obj)
    this.updateFG.reset();
  }


  initializeFG():void{
    this.updateFG = new FormGroup({
      id:new FormControl('',[Validators.required , Validators.minLength(1) , Validators.maxLength(6),]),
      name:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
      birthdate:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(9)]),
      email:new FormControl('',[Validators.required , Validators.minLength(10) , Validators.maxLength(20)]),
      phone:new FormControl('',[Validators.required , Validators.minLength(7) , Validators.maxLength(14)]),
      address:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
    });
  }

  ngOnInit(): void {
   var id= this.router.snapshot.paramMap.get('id');
  //  console.log("ID",id);

  }

}
