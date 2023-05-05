import { Component, OnChanges, Input } from '@angular/core';
import { Post } from '../classes/post';
import { ProfileService } from '../profile/profile.service';
import { MureService } from './mure.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { User } from '../classes/user';

@Component({
  selector: 'app-mure',
  templateUrl: './mure.component.html',
  styleUrls: ['./mure.component.scss']
})
export class MureComponent implements OnChanges {
  @Input() id!: any;
  @Input() user!: User;
  @Input() idowner:any;
  body?: any;
  url?: any;
  public Posts: Array<Post> = []
  public newAttribute: any = {};
  photoFile: any;
  message: any;
  @Input() isowner!:boolean;


  constructor(private mureService: MureService, private profileService: ProfileService, public snack: MatSnackBar) {


  }
  change(){
    console.log("qsdqsd")
  }


  afichbody() {
    console.log("helo" + this.body)
  }

  showsnock(message: string) {
    this.snack.open(message, '', {
      duration: 3000,
      verticalPosition: 'bottom',
      panelClass: ['blue-snackbar']
    })
  }

  ngOnChanges() {
    if(this.idowner==null){
     this.idowner=this.id
    }
    this.getoneuser();
  }

  getoneuser() {

    this.mureService.getposts(this.id).subscribe(data => {
      this.Posts = data.reverse();;

      console.log(this.Posts);


    })
  }

  AddNewPost(event: any) {

    this.photoFile = event.target.files[0];

    console.log("changed...!")
  }

  updloadphototocloud(id: number) {
    this.profileService.upload(this.photoFile, this.id, id).subscribe(data => {

      console.log(data.secure_url);
      this.url = data.secure_url;
      this.AddNewPostconf();

    }, (err: HttpErrorResponse) => {
      if (err.error instanceof Error) {
        console.log('Client-side error occured.');

      } else {
        console.log('Server-side error occured.');
        console.log('Server-side error occured.');
      }
    })
  }

  AddNewPostconf() {
    this.mureService.AddPost(this.body, this.url, this.id).subscribe(data => {
      console.log(data);
      this.addFieldValue();
      this.showsnock("Post Added !");
    })
  }



  DeletePost(id: number, index: number) {

    console.log(id);
    this.mureService.DeletePost(id).subscribe(data => {
      console.log(data);
      this.deleteFieldValue(index);
      this.showsnock("Post Deleted ! ");

    })
  }

  addFieldValue() {

    this.newAttribute = {
      id: 0,
      title: this.body,
      datepost: Date.now(),
      photo: this.url,
      video: "",
      likes: 0,
      dislike: 0,
      user: this.user,
      comments: []
    };
    this.Posts.unshift(this.newAttribute)
  }

  addcommentValue(index: number) {

    this.newAttribute = {
      body: this.message,
      datecomment: new Date().toDateString(),
      id: 0,
      user: this.user
    };
    this.Posts[index].comments.push(this.newAttribute)
  }

  deleteFieldValue(id: number) {
    this.Posts.splice(id, 1);
  }

  AddComment(idpost: number, indexpost: number) {

    this.mureService.AddComment(this.idowner, idpost, this.message).subscribe(data => {
      console.log(data);
      this.addcommentValue(indexpost);
    })
  }




}
