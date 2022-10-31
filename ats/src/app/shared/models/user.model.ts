// enum roleEmun {employer='employer', jobseeker='jobseeker', interviewer='interviewer'}

import { Role } from "./Enum/role.enum";


export interface User {
  id:number;
  firstname:string;
  lastname:string;
  email:string;
  role:Role;
}
