import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { User } from '../userInterface';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {


  data:any;
  Formuseradd = new FormGroup({
    name:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    birthdate:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(9)]),
    email:new FormControl('',[Validators.required , Validators.minLength(10) , Validators.maxLength(20)]),
    phone:new FormControl('',[Validators.required , Validators.minLength(7) , Validators.maxLength(15)]),
    address:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(30)]),
  });

  constructor(private userService : UserServiceService) {

  }
  ngOnInit(): void {
  }
  isNameValid(): string{
    const er = this.Formuseradd.get('name').errors?this.Formuseradd.get('name').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required'){
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
    const er = this.Formuseradd.get('birthdate').errors?this.Formuseradd.get('birthdate').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required'){
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
    const er = this.Formuseradd.get('email').errors?this.Formuseradd.get('email').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required'){
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
    const er = this.Formuseradd.get('phone').errors?this.Formuseradd.get('phone').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required'){
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
    const er = this.Formuseradd.get('address').errors?this.Formuseradd.get('address').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required'){
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



  onsubmit({value,valid}:{value:any,valid:boolean}){
    // console.log("Value",value,"Valied",valid)
    if(this.Formuseradd.valid){
      this.userService.addUser(value);
      // console.log("YYY",this.Formuseradd.value)
        this.Formuseradd.reset();
    }
  }


}
