import { User } from "./user";

export interface Friend {
  createdDate:Date;
  id:number;
  firstUser:User;
  secondUser:User;
  is_Friend:boolean;
}

