import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  card: number = 10;
  title: string = 'Nigam';
  server :string = 'this property binding';
  onChangeVal:boolean = false;
  onServerCreate : string = 'server is not created';

  constructor() {
    setTimeout(()=>{
      this.onChangeVal = true;
    },2000);
   }

  ngOnInit(): void {
  }
  
onServerChnage(){
  this.onServerCreate = 'server is created';
}

}
