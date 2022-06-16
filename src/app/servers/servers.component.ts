import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: "./servers.component.html",
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ["./servers.component.css"],
})
export class ServersComponent implements OnInit {
  serverCreationStatus: string = "No server was created";
  serverName: string = "";
  updatedServerName: string = "";
  userName: string = "";
  userNameDisplay: string = "";
  serverCreated: boolean = false;
  servers = ["TestServer", "TestServer2"];
  userNameCreated: boolean = false;
  display: boolean = false;
  displayArray: Number[] = [];

  constructor() {}

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = this.serverName + " server was created";
    this.updatedServerName = this.serverName;
    this.serverName = "";
  }

  onDestroyServer() {
    this.servers.pop();
    this.serverName = "";
  }

  onUpdateUserName() {
    this.userNameCreated = true;
    this.userNameDisplay = this.userName;
    this.userName = "";
  }

  onUpdateServerName(event: Event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onDisplay() {
    this.display = true;
    setTimeout(() => {
      this.display = false;
    }, 10000);
    this.displayArray.push(this.displayArray.length + 1);
  }
}
