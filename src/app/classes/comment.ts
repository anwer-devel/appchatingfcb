import { User } from "./user";


export interface Comment {
  body:string;
  datecomment:Date;
  id:number;
  user:User;
}
