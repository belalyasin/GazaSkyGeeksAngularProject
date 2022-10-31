import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Dropdown } from './shared/models/dropdown.models';
import { DropdownService } from './shared/services/dropdown.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnDestroy{

  title = 'ats';

  subscriptions: Subscription[] = []
  items:Dropdown[] = []

  itemApp: any;

  constructor(private dropdownService:DropdownService){}
  ngOnInit(): void {
    this.Dropdownloading();
  }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  Dropdownloading() {
    var dropdownSub = this.dropdownService.getAll()
    .subscribe(
      res => {
        this.dropdownService.setDropdownInStorage(res)
        console.log(res)
      },
      error => {
        console.log(error)
      }
      )
      this.subscriptions.push(dropdownSub)
      // console.log('--------',this.dropdownService.getCity(1))
      this.items = this.dropdownService.getCities(1,true)
    // console.log(this.dropdownService.getSkills())
    // console.log(this.dropdownService.getBenefits())
    // console.log(this.dropdownService.getLevels())
    // console.log(this.dropdownService.getStatus())
    // console.log(this.dropdownService.getMajors())
    // console.log(this.dropdownService.getUniversities(1))
  }

}
