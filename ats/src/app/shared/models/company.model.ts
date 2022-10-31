import { Address } from "./address.model";
import { Info } from "./company/info.model";
import { Contact } from "./contact.model";
import { Job } from "./job.model";
import { User } from "./user.model";

export interface	Company {
  inft:Info;
  ownerUser:User;
  users:User[];
  contact:Contact;
  address:Address;
  jops:Job[]
}
