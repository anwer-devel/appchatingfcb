import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { User } from '../classes/user';
import { LoaderService } from '../laoder/loader.service';
import { SocketServService } from '../socket-serv.service';
import { NavbarService } from './navbar.service';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
import { Message } from '../classes/message';
import { FriendsService } from '../friends/friends.service';
import { FriendprofService } from '../friendprof/friendprof.service';
import { Friend } from '../classes/friend';
import * as $ from 'jquery';
import { Msg } from '../classes/msg';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  search:string="";
  @Input() urlprof?:String="";
  @Input() mail:string="";
  @Input() id!:number;
  @Input() user!:User;
    mess:string="";

  greetings: string[] = [];
  send:Msg[]=[];

  disabled = true;
  private stompClient:any;
  message!:Message
  seconduser:string="ahmed@gmail.com"
  seconduserprof!:any;
  friends!:Friend[];
  desc!:User;


  @Output("parentFun") parentFun: EventEmitter<any> = new EventEmitter();
  constructor(public loaderService:LoaderService,private navbarServ:NavbarService,private friendserv:FriendsService) {

  }



  changes(){
    this.parentFun.emit();
  this.navbarServ.updateApprovalMessage(this.search);
  }


  ngOnInit(): void {
    this.friendserv.getFriends(this.id).subscribe(data =>{
      this.friends=data;

          })

    this.connect()
    this.greetings = [];


      $('.close-mesage').on('click', function() {
        $('.chat-box').removeClass("show");
        return false;
      });


  }

  showmessage(f:User){
    this.seconduser=f.email;
    this.seconduserprof=f.urlprof;
    this.desc= f;
      $('.friendz-list > li, .chat-users > li').on('click', function() {
      $('.chat-box').addClass("show");


      return false;
    });


    console.log('showi');
  }



  setConnected(connected: boolean) {
    this.disabled = !connected;

    if (connected) {
      this.greetings = [];
    }
  }

  connect() {
    const socket = new SockJS('http://localhost:8080/ws');
    this.stompClient = Stomp.over(socket);

    const _this = this;
    this.stompClient.connect({ username: this.mail, }, function (frame:any) {
      _this.setConnected(true);

      _this.stompClient.subscribe('/user/topic/messages', function (hello:any) {
        console.log(hello.body)
             _this.send.push(JSON.parse(hello.body))

      });
    });
  }

  disconnect() {
    if (this.stompClient != null) {
      this.stompClient.disconnect();
    }

    this.setConnected(false);
    console.log('Disconnected!');
  }

  sendName(message:string) {

    this.stompClient.send(
      '/app/message',
      {},
      JSON.stringify( {'message': this.mess, 'firstuser': this.mail ,'seconduser':this.seconduser}))

        //JSON.stringify({ 'name': message }

  }

  showGreeting(message:string) {

  }


  sendmessge(){

    this.sendName(this.mess)

    this.send.push({"message": this.mess, "from": this.mail});

  }



}
