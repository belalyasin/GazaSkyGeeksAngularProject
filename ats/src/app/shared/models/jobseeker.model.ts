import { Address } from "./address.model";
import { Contact } from "./contact.model";
import { Education } from "./education.model";
import { Experience } from "./experience.model";
import { Language } from "./language.model";
import { Skills } from "./skills.model";
import { User } from "./user.model";

export interface	Jobseeker{
  // user:User;
  contact:Contact;
  address:Address;
  educations:Education[];
  experiences:Experience[];
  // skills:Skills[];
  // languages:Language[];

}
