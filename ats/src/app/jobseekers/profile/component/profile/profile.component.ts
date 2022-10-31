import { Component, OnInit } from '@angular/core';
import { Address } from 'src/app/shared/models/address.model';
import { Contact } from 'src/app/shared/models/contact.model';
import { Education } from 'src/app/shared/models/education.model';
import { Experience } from 'src/app/shared/models/experience.model';
import { Jobseeker } from 'src/app/shared/models/jobseeker.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  address: Address = {buildingNumber:'',cityid:1,countryid:1,regionId:1,street:''};
  contact:Contact={email:'',fax:'',id:1,mobile:'',phone:''}
  educations:Education[]=[]
  experiences:Experience[]=[{cityId:1,companyId:1,countryId:1,endDate:new Date(),id:1,position:'',presentStatus:'',salary:2000,startDate:new Date()}]

  jobseeker: Jobseeker = {address:this.address,
  contact:this.contact,
  educations:this.educations,
  experiences:this.experiences
}

  constructor() { }

  ngOnInit(): void {
    this.educations=[
      // { city:1, country:1, endDate:new Date(),id:1,major:1,presentStatus:'false',startDate:new Date(),university:"" }
    ]
  }

  onProfileUpdate(data: any, type: string): void {
    if(type === 'address'){
      this.address = data;
    }
  }

}
