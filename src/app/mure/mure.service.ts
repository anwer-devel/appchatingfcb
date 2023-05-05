import { Injectable,Input } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../classes/post';
import { Photourl } from '../classes/photourl';
import { Comment } from '../classes/comment';

@Injectable({
  providedIn: 'root'
})
export class MureService {


  constructor(private httpClient: HttpClient) { }

  public getposts(i: number) {
    let myData = this.httpClient.get<Post[]>("http://127.0.0.1:8080/postss/" + i);
    return myData;
  }



  public AddPost(titlee: string, photos: string, id: number) {
    const headers = new HttpHeaders();
    headers.set('Accept', '*/*');
    headers.set('Content-Type', 'application/json; charset=utf-8');
    let formData = new FormData();
    formData.append("title", titlee);
    formData.append("photo", photos);


    let myData = this.httpClient.post<Post>("http://127.0.0.1:8080/posts/"+id, { title: titlee, photo: photos }, { headers: headers });
    return myData;

  }

  public DeletePost(id: number) {

    let myData = this.httpClient.delete<Post>("http://127.0.0.1:8080/posts/" + id);
    return myData;

  }

  public AddComment(iduser: number, idpost: number, message: string) {

    

    let myData = this.httpClient.post<Comment>("http://127.0.0.1:8080/comments/" + iduser + "/" + idpost, { body: message });
    return myData;

  }


}

