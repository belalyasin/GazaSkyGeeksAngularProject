import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Address } from '../../models/address.model';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  @Input() data: Address = {
    cityid:1,buildingNumber:'',countryid:1,regionId:1,street:''
  }
  @Output() onUpdate: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
