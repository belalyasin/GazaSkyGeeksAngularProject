import { InterviewType } from "./Enum/interview.enum";
import { User } from "./user.model";

// enum interviewType {
//   'INTERVIEW 1',
//   'INTERVIEW 2',
//   'INTERVIEW 3'
// }

export interface Interview {
  id:number;
  jobApplicationId:number;
  date :Date;
  time:Date;
  duration:string;
  interviewType:InterviewType
  interviewDetails:string;
  interviewers:User[]
}

