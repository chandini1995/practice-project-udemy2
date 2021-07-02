import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ServerElements=[{type:'server',name:'Testserver',content:'just a test'}]
  onServerAdded(serverData: {serverName: string, serverContent:string}){
    this.ServerElements.push({
    type:'server',
    name:serverData.serverName,
    content:serverData.serverContent
  });
}

onBuePrintAdded(bluePrintDaa: {serverName: string, serverContent: string}){
  this.ServerElements.push({
    type: 'blueprint',
    name: bluePrintDaa.serverName,
    content: bluePrintDaa.serverContent,
  });
 }
}
