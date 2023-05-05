import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class FriendprofService {

  constructor(private httpClient: HttpClient) { }
  imageURL = 'http://localhost:8080/cloudinary'

  public getoneuser(id:string) {
    let myData = this.httpClient.get<User>("http://localhost:8080/users/"+id);
    return myData;
  }
}
