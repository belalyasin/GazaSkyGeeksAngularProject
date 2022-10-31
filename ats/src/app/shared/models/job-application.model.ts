import { Details } from "./jobApplication/details.model";
import { StatusHistory } from "./jobApplication/statusHistory.model";

export interface JobApplication{
  details:Details;
  statusHistory:StatusHistory
}
