import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';
import { Friend } from '../classes/friend';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpClient: HttpClient) { }


  public getbyusers(name:string , lastname:string) {
    let myData = this.httpClient.get<User[]>('http://localhost:8080/usersby/'+name+'/'+lastname);
    return myData;
  }

  public sendReq(idone:number,idtow:number){

    let myData = this.httpClient.post<Friend>('http://localhost:8080/friend/'+idone+'/'+idtow,{});
    return myData;
  }

}
