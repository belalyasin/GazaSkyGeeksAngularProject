import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { AddressComponent } from './components/address/address.component';
import { ContactComponent } from './components/contact/contact.component';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

let component = [
  AddressComponent,
  ContactComponent,
  DropdownComponent
];
@NgModule({
  declarations: [
    ...component,

  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    ...component,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
