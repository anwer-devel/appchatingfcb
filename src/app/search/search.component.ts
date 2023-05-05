import { Component, OnInit,Input } from '@angular/core';
import { User } from '../classes/user';
import { NavbarService } from '../navbar/navbar.service';
import { SearchService } from './search.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  users!:User[];
  @Input() id?:number;

  constructor(private navbarServ:NavbarService,private searchServ:SearchService,public snack: MatSnackBar) { }

  ngOnInit(): void {
    this.navbarServ.currentApprovalStageMessage.subscribe(msg => {
      const myArray = msg.split(" ");
      if(myArray[1]==""){
        myArray[1]="vide";
      }
      this.searchServ.getbyusers(myArray[0],myArray[1]).subscribe(data =>{

        console.log(data);
        this.users=data;

      })


    })
  }

  showsnock(message: string) {
    this.snack.open(message, '', {
      duration: 3000,
      verticalPosition: 'bottom',
      panelClass: ['blue-snackbar']
    })
  }

  sendReq(idone:number){
    this.searchServ.sendReq(this.id!,idone).subscribe(data =>{
      this.showsnock("Request Sent!")
    },err=>{
      this.showsnock("Error ! ")
    })
  }





}
