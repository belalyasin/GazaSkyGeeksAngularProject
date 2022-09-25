import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserServiceService } from '../user-service.service';
import { concatMap, from,Subscription } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit,OnDestroy {

  user:User[]=[];
  isLodding:boolean=false;
  subscription: Subscription = new Subscription;
  total_pages:number;
  total:number;
  total_pagesAr:number[];
  perPage:number=4;
  page:number;
  itemChecked:boolean[]=[];
  constructor(private userService : UserServiceService) { }


  ngOnInit(): void {
    this.getUser(this.page);
  }
  getUser(page:any) {
    this.isLodding = true;
    this.subscription=this.userService.getAll(page,this.perPage).subscribe(
      (res:any) =>{
        // console.log('res ' + res.data.id);
        this.user = res.data;
        console.log('user' + this.user);
        this.page=res.page;
        this.total_pages=res.total_pages;
        this.total=res.total;
        this.total_pagesAr = Array.from(new Array(this.total_pages).keys(),(item)=>item+1);
        this.itemChecked = Array.from(new Array(res.data.length).keys(),(item)=>false);
        this.isLodding = false;
      },
      error=>{
        this.isLodding = false;
      }
    )
  }

  onRemove(id:any){
    this.userService.delete(id).subscribe(
      res=>{
        console.log(res);
      },
      error=>{
        console.log(error);
      }
    );
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  previous():void{
    this.getUser(this.page-1)
  }
  next():void{
    this.getUser(this.page+1)
  }
  goToPage(page:number):void{
    this.getUser(page);
  }

  toggleCheckboxAll(value:boolean):void{
    this.itemChecked = Array.from(new Array(this.user.length).keys(),(item)=>value);
  }
  toggleCheckbox(value:boolean , id:number):void{
    this.itemChecked[id]=value;
  }

  deleteItemSelected():void{
    let checked:any = [];
    this.itemChecked.forEach((value,i)=>{
      if(value){
        checked.push(this.user[i].id);
      }
    })
    var obj = from(checked);
    obj.pipe(
      concatMap((value:any)=>{
        return this.userService.delete(value);
      })
      ).subscribe(
        res=>{
        console.log(res)
        this.itemChecked=[res];
      },
      err=>{
        console.error(err);
      }
    )
  }

}
