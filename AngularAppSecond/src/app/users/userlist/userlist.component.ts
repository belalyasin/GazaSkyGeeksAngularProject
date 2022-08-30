import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../userInterface';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})
export class UserlistComponent implements OnInit {

  userData:any[];
  constructor(private userService : UserServiceService) { }

  onRemove(id:any):void{
    this.userService.removeUser(id);
  }
  ngOnInit(): void {
    this.userData=this.userService.getalluser();
    // console.log("usrelis.ts-->",this.userData)
  }

}
