import { User } from "./user";
import { Comment } from "./comment";
export interface Post {
  id:number;
  title:String;
  datepost:Date;
  photo:String;
  video:String;
  likes:number;
  dislike:number;
  user:User;
  comments:Comment[];
}
