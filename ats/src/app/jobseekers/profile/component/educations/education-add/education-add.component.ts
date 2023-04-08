import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Dropdown } from 'src/app/shared/models/dropdown.models';
import { Education } from 'src/app/shared/models/education.model';
import { DropdownService } from 'src/app/shared/services/dropdown.service';
import { EducationsService } from 'src/app/shared/services/educations.service';

@Component({
  selector: 'app-education-add',
  templateUrl: './education-add.component.html',
  styleUrls: ['./education-add.component.scss']
})
export class EducationAddComponent implements OnInit {
  majorList:Dropdown[]=[];
  countryList :Dropdown[]=[];
  cityList :Dropdown[]=[];
  universityList:Dropdown[]=[];
  @Input() formData: any;
  @Output() onUpdated : EventEmitter<Education[]>=new EventEmitter<Education[]>;

  formGrop : FormGroup;

  constructor(private dropdown:DropdownService,private educationsService:EducationsService ,private fg:FormBuilder) { }

  ngOnInit(): void {
    this.majorList = this.dropdown.getMajors();
    this.countryList = this.dropdown.getCountries();
    this.formGrop = this.fg.group({
      major:[this.formData?.major,Validators.required],
      country:[this.formData?.country,Validators.required],
      ctiy:[this.formData?.city,Validators.required],
      university:[this.formData?.university,Validators.required],
      start:[this.formData?.start],
      end:[this.formData?.end],
      present:[this.formData?.present],
    });
    if(this.formData){
      //edit
    }else{
      //add
    }
  }

  onItemSelect(item:any,type:string):void{
    if(type === 'major'){
      this.formGrop.get('major').setValue(item.id)
    }else if(type === 'country'){
      this.formGrop.get('country').setValue(item.id)
      this.cityList = this.dropdown.getCities(item.id)
      this.formGrop.get('city')?.setValue(item.id)
      console.log(this.dropdown.getCities(item.id),'city')
    }else if(type === 'city'){
      this.formGrop.get('city')?.setValue(item.id)
      // this.cityList = this.dropdown.getCities(item.id)
      this.universityList = this.dropdown.getUniversities(item.id)
      this.formGrop.get('university').setValue(item.id)
    }else if(type === 'university'){
      this.formGrop.get('university').setValue(item.id)
    }
  }

  onSubmit():void{
    console.log(this.formGrop.value)
    if(this.formGrop.valid){
      this.educationsService.add(this.formGrop.value);
      // const formValue = this.formGrop.value;
    }else{
      this.formGrop.markAllAsTouched;
    }
  }

}
