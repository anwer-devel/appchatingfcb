import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../classes/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger } from '@angular/animations';
import { AuthService } from '../auth/auth.service';
import { FriendsService } from '../friends/friends.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user!: User;
  mure = true;
  isowner=true;
  photo = false;
  about = false;
  search =false;
  friends=false;
  photoFile: any;
  URL_prof?: String;
  Url_Cov?: String;
  id!:string;
  constructor(private profileservice: ProfileService, public snack: MatSnackBar,private Athserv:AuthService) { }

  ngOnInit(): void {

    this.Athserv.currentIDUser.subscribe(data =>{
      this.id=data!;
    })

    this.getoneuser(this.id);

  }
  getphoto() {
    this.mure = false;
    this.about=false;
     this.search=false;
     this.friends=false;
    this.photo = true;

  }
  getmure() {
    this.mure = true;
    this.about=false;
    this.friends=false;
    this.photo = false;
    this.search = false;
  }
  getabout() {
    this.mure = false;
    this.friends=false;
    this.about=true;
    this.photo = false;
    this.search = false;
  }
  getfriends() {
    this.mure = false;

    this.about=false;
    this.photo = false;
    this.search = false;
     this.friends=true;
  }
  get myMethodFunc() {
    return this.getsearch.bind(this);
}

  getsearch() {
       console.log("changes")

    this.mure = false;
    this.about=false;
    this.photo = false;
    this.search = true;
  }

  getoneuser(id:string) {

    this.profileservice.getoneuser(id).subscribe(data => {
      this.user = data;
      console.log(this.user)
      this.URL_prof = this.user.urlprof;
      this.Url_Cov = this.user.urlcov;
    })
  }

  showsnock(message: string) {
    this.snack.open(message, '', {
      duration: 3000,
      verticalPosition: 'bottom',
      panelClass: ['blue-snackbar']
    })
  }

  updatephoto(event: any, f: number) {
    this.photoFile = event.target.files[0];
    this.profileservice.upload(this.photoFile,this.user.id, f).subscribe(data => {
      if (f == 1) {
        this.URL_prof = data.secure_url;
      } else if (f == 2) {
        this.Url_Cov = data.secure_url;
      }
      this.showsnock("photo added ! ")


    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');

      } else {
        console.log('Server-side error occured.');
        console.log('Server-side error occured.');
      }
    })
    console.log("changed...!")
  }

}
