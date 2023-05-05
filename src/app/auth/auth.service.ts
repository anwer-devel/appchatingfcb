import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user!:User;
  id!:string;
  constructor(private httpClient: HttpClient) {
  }

  private isLogin = new BehaviorSubject(false);
  currentisLogin = this.isLogin.asObservable();


  private IdUser = new BehaviorSubject(localStorage.getItem('id'));
  currentIDUser = this.IdUser.asObservable();



  public login(mail: string,password:string) {
    let myData = this.httpClient.get<User>("http://127.0.0.1:8080/login/"+mail+"/"+password);
    return myData;
  }


  updateIsLogin(login: boolean) {
    this.isLogin.next(login);
    }

  updateIdUser(id:string) {
      this.IdUser.next(id);
      }

   public register(firstname:string,lastname:string,rmail:string,rpassword:string,gander:string){
   let myData = this.httpClient.post<User>("http://127.0.0.1:8080/users",{"name":firstname,"lastname":lastname,"email":rmail,"password":rpassword,"gender":gander,"urlprof":"/assets/images/resources/prof.png","urlcov":"/assets/images/resources/cov.png"})
   return myData;
   }
}
