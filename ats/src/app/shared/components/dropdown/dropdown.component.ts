import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Dropdown } from '../../models/dropdown.models';
declare var $ : any;
@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit,AfterViewInit {
@Input() list:any[]=[];
@Input() label:string='';
@Input() selectedValue:string=''
@Output() onItemSelect:EventEmitter<Dropdown> = new EventEmitter<Dropdown>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelecet(value:any):void{
    // console.log('val',value.target.value);
    value = value.target.value
    const item = this.list.find(i => i.id == value);
    // console.log(item,'item')
    this.onItemSelect.emit(item)
  }

  ngAfterViewInit(): void {
      //Initialize Select2 Elements
      var taht =this;
      // $('.select2').select2()
      $('.select2').on('select2',function(e:any){
        taht.onSelecet(e.params.id);
      })
  }

}
