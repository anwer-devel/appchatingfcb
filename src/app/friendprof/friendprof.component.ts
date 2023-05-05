import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { User } from '../classes/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { trigger } from '@angular/animations';
import { AuthService } from '../auth/auth.service'
import { FriendprofService } from './friendprof.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friendprof',
  templateUrl: './friendprof.component.html',
  styleUrls: ['./friendprof.component.scss']
})
export class FriendprofComponent implements OnInit {

  user!: User;
  isowner:boolean=false;
  mure = true;
  photo = false;
  about = false;
  search =false;
  friends=false;
  photoFile: any;
  URL_prof?: String;
  Url_Cov?: String;
  id!:string;
  id_owner!:string;
  constructor(private profileservice: FriendprofService, public snack: MatSnackBar,private Athserv:AuthService,private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    this._Activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id')!;
      this.id_owner = params.get('ownerid')!;
      console.log("owwwwwner is "+this.id_owner)

  });

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



}
