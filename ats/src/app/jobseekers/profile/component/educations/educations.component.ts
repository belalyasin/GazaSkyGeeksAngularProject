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

  constructor(private educationsService :EducationsService,private dropdown :DropdownService) { }

  ngOnInit(): void {
    this.data = this.educationsService.getAll();
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
      formData=this.data[this.selecteIndex];
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
      console.log(this.formData)
      this.showAddFormStatus=true;
      }, 100);
    }

    onDelete(index:number):void{
      this.data.splice(index,1)
    }

}
