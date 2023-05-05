import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Photos } from '../classes/photos';
import { Photourl } from '../classes/photourl';
@Injectable({
  providedIn: 'root'
})
export class PhotosService {

  constructor(private httpClient: HttpClient) { }


  public getoneuser(i: number) {
    let myData = this.httpClient.get<Photos[]>("http://localhost:8080/photoss/" + i);
    return myData;
  }




}
