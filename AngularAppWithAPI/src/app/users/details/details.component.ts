import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../models/user.model';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  user:User;
  isLodding:boolean=false;

  constructor(private userService : UserServiceService,private router : ActivatedRoute) { }
   id=this.router.snapshot.paramMap.get('id');
  ngOnInit(): void {
    this.getById(this.id)
  }
  getById(id:any) {
    // let id=this.router.snapshot.paramMap.get('id');
    this.isLodding = true;
    this.userService.getById(this.id).subscribe(
      res=>{
        console.log(res);
        this.user = res;
        this.isLodding = false;
      },
      err=>{
        console.log(err);
        this.isLodding = false;
      }
    );
  }

}
