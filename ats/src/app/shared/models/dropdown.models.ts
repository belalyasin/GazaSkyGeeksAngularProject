import { DropdownPerant } from "./dropdown-perant.models";

export interface Dropdown{
  universities: DropdownPerant;
  majors: Dropdown;
  status: Dropdown;
  levels: Dropdown;
  benefits: Dropdown;
  languages: Dropdown;
  educationLevel: Dropdown;
  nationality: Dropdown;
  sector: Dropdown;
  functionalArea: Dropdown;
  jobType: Dropdown;
  city: DropdownPerant;
  skills: Dropdown;
  country: Dropdown;
  id:number;
  name:string
}
