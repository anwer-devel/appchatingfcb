import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { User } from '../classes/user';
import { AuthService } from './auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
   mail!:string;
   password!:string;
   user!:User;
   id!:number;
   firstname!:string;
   lastname!:string;
   rmail!:string;
   rpassword!:string;
   gander!:string;

  constructor(private authServ:AuthService,private router:Router,public snack: MatSnackBar) { }

  ngOnInit(): void {
    this.authServ.currentisLogin.subscribe(state =>{
      console.log(state);
    })
  }

  showsnock(message: string) {
    this.snack.open(message, '', {
      duration: 3000,
      verticalPosition: 'bottom',
      panelClass: ['blue-snackbar']
    })
  }


  login(){
    this.authServ.login(this.mail,this.password).subscribe(data =>{
     console.log(data);
     if(data!=null){
       this.user=data;
       localStorage.setItem('id',data.id.toString());
       this.authServ.updateIsLogin(true);
       this.authServ.updateIdUser(this.user.id.toString());
       this.router.navigate(['/profile'])
     }
     else{
       this.showsnock("check your login info and make sure you're using your usual device on a secure network");
     }
    });
  }

  register(){
    this.authServ.register(this.firstname,this.lastname,this.rmail,this.rpassword,this.gander).subscribe(data =>{
      this.mail=this.rmail;
      this.password=this.rpassword;
      this.login();

    })
  }

}
