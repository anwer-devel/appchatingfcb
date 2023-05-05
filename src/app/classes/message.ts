import { User } from "./user";

export interface Message {

  createdDate:Date;
  id:number;
  firstUser:User;
  secondUser:User;
  message_content:string;
}
