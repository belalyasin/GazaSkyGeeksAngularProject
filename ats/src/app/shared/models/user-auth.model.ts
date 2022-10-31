import { User } from "./user.model";

export interface	UserAuth extends User{
  user:User;
  permissions:string[]
}
