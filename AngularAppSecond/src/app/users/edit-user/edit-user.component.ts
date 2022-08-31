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
    // id:this.userService.getUserById(id).id,
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
      id:this.router.snapshot.paramMap.get('id'),
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
      name:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
      birthdate:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(9)]),
      email:new FormControl('',[Validators.required , Validators.minLength(10) , Validators.maxLength(20)]),
      phone:new FormControl('',[Validators.required , Validators.minLength(7) , Validators.maxLength(15)]),
      address:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(30)]),
    });
  }

  ngOnInit(): void {
   var id= this.router.snapshot.paramMap.get('id');
  //  console.log("ID",id);

  }

  isNameValid(): string{
    const er = this.updateFG.get('name').errors?this.updateFG.get('name').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required' && this.updateFG.get('name').touched){
          errorMessage.push("Name is Required")
        }else if(error==='minlength'){
          errorMessage.push("Name shuolde be at least 3")
        }else if(error==='maxlength'){
          errorMessage.push("Name shuolde be less than or equal 15")
        }
      })
      return errorMessage.join(',')
    }
    return null;
  }

  isBirthdateValid(): string{
    const er = this.updateFG.get('birthdate').errors?this.updateFG.get('birthdate').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required' && this.updateFG.get('birthdate').touched){
          errorMessage.push("Birthdate is Required")
        }else if(error==='minlength'){
          errorMessage.push("Birthdate shuolde be at least 3")
        }else if(error==='maxlength'){
          errorMessage.push("Birthdate shuolde be less than or equal 9")
        }
      })
      return errorMessage.join(',')
    }
    return null;
  }
  isemailValid(): string{
    const er = this.updateFG.get('email').errors?this.updateFG.get('email').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required' && this.updateFG.get('email').touched){
          errorMessage.push("Email is Required")
        }else if(error==='minlength'){
          errorMessage.push("Email shuolde be at least 10")
        }else if(error==='maxlength'){
          errorMessage.push("Email shuolde be less than or equal 20")
        }
      })
      return errorMessage.join(',')
    }
    return null;
  }
  isphoneValid(): string{
    const er = this.updateFG.get('phone').errors?this.updateFG.get('phone').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required' && this.updateFG.get('phone').touched){
          errorMessage.push("Phone is Required")
        }else if(error==='minlength'){
          errorMessage.push("Phone shuolde be at least 7")
        }else if(error==='maxlength'){
          errorMessage.push("Phone shuolde be less than or equal 15")
        }
      })
      return errorMessage.join(',')
    }
    return null;
  }
  isaddressValid(): string{
    const er = this.updateFG.get('address').errors?this.updateFG.get('address').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required' && this.updateFG.get('address').touched){
          errorMessage.push("Address is Required")
        }else if(error==='minlength'){
          errorMessage.push("Address shuolde be at least 3")
        }else if(error==='maxlength'){
          errorMessage.push("Address shuolde be less than or equal 30")
        }
      })
      return errorMessage.join(',')
    }
    return null;
  }

}
