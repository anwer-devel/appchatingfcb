import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';
import { Photourl } from '../classes/photourl';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }
  imageURL = 'http://localhost:8080/cloudinary'

  public getoneuser(id:string) {
    let myData = this.httpClient.get<User>("http://localhost:8080/users/"+id);
    return myData;
  }



  public upload(image: File, id: number, f: number) {
    console.log(image)
    const headers = new HttpHeaders();
    headers.set('Accept', '*/*');

    headers.set('Content-Type', 'application/json; charset=utf-8');
    let formData = new FormData();
    formData.append("multipartFile", image);

    let myData = this.httpClient.post<Photourl>('http://localhost:8080/cloudinary/upload/' + id + '/' + f, formData, { headers: headers });
    return myData;



  }
  public delete(id: String) {

    let myData = this.httpClient.delete<any>(this.imageURL + `delete/${id}`);
    return myData;

  }


}
