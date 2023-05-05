import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Friend } from '../classes/friend';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  constructor(private httpClient: HttpClient) { }

  public getFriends(id:number) {
    let myData = this.httpClient.get<Friend[]>("http://localhost:8080/friend/"+id);
    return myData;
  }

  public asFriend(id:number){

    let myData = this.httpClient.put<Friend[]>("http://localhost:8080/friend/"+id,{});
    return myData;
  }

  public deleteFriend(id:number){

    let myData = this.httpClient.delete<Friend>("http://localhost:8080/friend/"+id);
    return myData;
  }


}
