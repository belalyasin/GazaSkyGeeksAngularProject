import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Education } from 'src/app/shared/models/education.model';
import { DropdownService } from 'src/app/shared/services/dropdown.service';
import { EducationsService } from 'src/app/shared/services/educations.service';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss']
})
export class EducationsComponent implements OnInit {
  @Input() data :Education[]=[];
  @Output() onUpdated : EventEmitter<Education[]>=new EventEmitter<Education[]>;
  showAddFormStatus: boolean = false;
  educations: any[] = [];
  formData: any=null;
  formType: number = 1;
  selecteIndex = 0;
  dropdownT:any = this.dropdown.getMajors()
    name:any[]=[]

  constructor(private educationsService :EducationsService,private dropdown :DropdownService) { }

  ngOnInit(): void {
    this.data = this.educationsService.getAll();
    // this.name = this.educationsService.name
    console.log(this.dropdown.getMajors(),'------')
    // console.log(this.educationsService.m[0].name)
  }

  toggleAddForm(): void {
    this.formType = 1;
    this.formData = null;
    this.showAddFormStatus = !this.showAddFormStatus;
  }

  onFormUpdate(formData: any){
    if(this.formType === 1){
      //add
      this.data.push(formData);
    }else{
      //edit
      this.data[this.selecteIndex]=formData;
      this.onUpdated.emit(formData);

    }
  }

  onEdite(index: number): void {
      this.formType = 2;
      this.showAddFormStatus=false;
      this.formData = null;
      setTimeout(() => {
      this.selecteIndex=index;
      this.formData = this.data[index];
      this.showAddFormStatus=true;
      }, 100);

    }

    onDelete(index:number):void{
      this.data.splice(index,1)
    }

}
