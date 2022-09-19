import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  Formuseradd = new FormGroup({
    first_name:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    last_name:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    email:new FormControl('',[Validators.required , Validators.minLength(10) , Validators.maxLength(20)]),
    avatar:new FormControl('',[Validators.required , Validators.minLength(3)]),
  });

  constructor(private userService : UserServiceService) { }

  ngOnInit(): void {
  }

  isNameValid(): string{
    const er = this.Formuseradd.get('first_name').errors?this.Formuseradd.get('first_name').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required' && this.Formuseradd.get('first_name').touched){
          errorMessage.push("First Name is Required");
        }else if(error==='minlength'){
          errorMessage.push("First Name shuolde be at least 3");
        }else if(error==='maxlength'){
          errorMessage.push("First Name shuolde be less than or equal 15");
        }
      })
      return errorMessage.join(',');
    }
    return null;
  }

  isLastNameValid(): string{
    const er = this.Formuseradd.get('last_name').errors?this.Formuseradd.get('last_name').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required' && this.Formuseradd.get('last_name').touched){
          errorMessage.push("Last Name is Required");
        }else if(error==='minlength'){
          errorMessage.push("Last Name shuolde be at least 3");
        }else if(error==='maxlength'){
          errorMessage.push("Last Name shuolde be less than or equal 9");
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
        if(error==='required' && this.Formuseradd.get('email').touched){
          errorMessage.push("Email is Required");
        }else if(error==='minlength'){
          errorMessage.push("Email shuolde be at least 10");
        }else if(error==='maxlength'){
          errorMessage.push("Email shuolde be less than or equal 20");
        }
      })
      return errorMessage.join(',')
    }
    return null;
  }
  isavatarValid(): string{
    const er = this.Formuseradd.get('avatar').errors?this.Formuseradd.get('avatar').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error ==='required' && this.Formuseradd.get('avatar').touched){
          errorMessage.push("Avatar is Required")
        }else if(error==='minlength'){
          errorMessage.push("Avatar shuolde be at least 3")
        }
      })
      return errorMessage.join(',')
    }
    return null;
  }

  addUser({value,valid}:{value:any,valid:boolean}){
    if(this.Formuseradd.valid){
      this.userService.add(value).subscribe(
        res=>{
          console.log(res);
        },
        error=>{
          console.error(error);
        }
      );
      this.Formuseradd.reset();
    }
  }
}
