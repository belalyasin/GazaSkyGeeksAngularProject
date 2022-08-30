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
    phone:new FormControl('',[Validators.required , Validators.minLength(7) , Validators.maxLength(14)]),
    address:new FormControl('',[Validators.required , Validators.minLength(3) , Validators.maxLength(20)]),
  });

  constructor(private userService : UserServiceService) {

  }
  ngOnInit(): void {
  }



  onsubmit({value,valid}:{value:any,valid:boolean}){
    // console.log("Value",value,"Valied",valid)
  this.userService.addUser(value);
  // console.log("YYY",this.Formuseradd.value)
    this.Formuseradd.reset();
  }


}
