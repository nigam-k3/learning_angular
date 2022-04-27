import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'no server was created';
  serverName = '';
  isBoolean:boolean=false

  constructor() {
    setTimeout(()=>{
      this.allowNewServer = true;
    },2000);
   }
arr=[{fname:"Mohit",lname:"Rathore"},{fname:"Rohit",lname:"Singh"}]
  ngOnInit(): void {
  }
  onCreateServer(){
    this.serverCreationStatus = 'server is created! Name is'+ this.serverName;
  }
  onUpdateServerName(event : Event){
    console.log(event);
    this.serverName = (<HTMLInputElement> event.target).value;
  }
  onSubmit(){
    this.isBoolean=true
  }
}