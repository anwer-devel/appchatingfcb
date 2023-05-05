import { Component, Input, OnInit } from '@angular/core';
import { User } from '../classes/user';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  @Input() user?:any;
  userMod:any;
  constructor() { }

  ngOnInit(): void {
    this.userMod=this.user;
  }

}
