import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  Formupdateuser = new FormGroup({
    first_name:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    last_name:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    email:new FormControl('',[Validators.required , Validators.minLength(10) , Validators.maxLength(20)]),
    avatar:new FormControl('',[Validators.required , Validators.minLength(3)]),
  });
  constructor(private userService : UserServiceService,private router: Router, private activated:ActivatedRoute) { }

  ngOnInit(): void {
    let id = this.activated.snapshot.paramMap.get('id');
    this.getById(id);
  }
  getById(id: any) {
    this.userService.getById(id).subscribe(
      (res:User)=>{
        let user:User=res;
        // console.log(user);
        this.Formupdateuser = new FormGroup({
          first_name:new FormControl(res['first_name']),
          last_name:new FormControl(res['last_name']),
          email:new FormControl(res['email']),
          avatar:new FormControl(res['avatar']),
        });
      },
      error=>{}
    )
  }

  onupdate(id:any,obj:any){
    // console.log(this.Formupdateuser.value)
    id=this.activated.snapshot.paramMap.get('id');
    obj=this.Formupdateuser.value;
    this.userService.update(id,obj).subscribe(
      res=>{
        console.log(res);
      },
      error=>{
        console.log(error);
      }
      );
      this.Formupdateuser.reset();
  }

  isNameValid(): string{
    const er = this.Formupdateuser.get('first_name').errors?this.Formupdateuser.get('first_name').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required' && this.Formupdateuser.get('first_name').touched){
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
    const er = this.Formupdateuser.get('last_name').errors?this.Formupdateuser.get('last_name').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required' && this.Formupdateuser.get('last_name').touched){
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
    const er = this.Formupdateuser.get('email').errors?this.Formupdateuser.get('email').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error==='required' && this.Formupdateuser.get('email').touched){
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
    const er = this.Formupdateuser.get('avatar').errors?this.Formupdateuser.get('avatar').errors:{}
    const errors = Object.keys(er);
    if(errors.length>0){
      let errorMessage:any=[];
      errors.forEach(error => {
        if(error ==='required' && this.Formupdateuser.get('avatar').touched){
          errorMessage.push("Avatar is Required")
        }else if(error==='minlength'){
          errorMessage.push("Avatar shuolde be at least 3")
        }
      })
      return errorMessage.join(',')
    }
    return null;
  }

}
