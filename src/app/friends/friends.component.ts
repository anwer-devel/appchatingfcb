import { Component, OnInit ,Input} from '@angular/core';
import { Friend } from '../classes/friend';
import { FriendsService } from './friends.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../classes/user';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {

@Input() id!:number;
@Input() isowner!:boolean;
friends!:Friend[];

  constructor(private friendServ:FriendsService,public snack: MatSnackBar) { }

  ngOnInit(): void {
    this.friendServ.getFriends(this.id).subscribe(data =>{
this.friends=data;
      console.log(data);

    })
  }


  showsnock(message: string) {
    this.snack.open(message, '', {
      duration: 3000,
      verticalPosition: 'bottom',
      panelClass: ['blue-snackbar']
    })
  }


  asFriend(id:number){
    this.friendServ.asFriend(id).subscribe(data =>{
      this.showsnock("Friend Accepted !")

    })
  }
  delFriend(id:number){
    this.friendServ.deleteFriend(id).subscribe(data =>{
 console.log(data);
 this.showsnock("Friend Deleted !")
    })
  }


}

