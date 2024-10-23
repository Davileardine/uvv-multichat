import {Component} from "@angular/core";
import { Routes } from "@angular/router";
import { routes } from "../../app.routes";

// import {ChatComponent} from "../chat/chat.component";
// import {InputComponent} from "../input/input.component";
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'message-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './messagelist.html',
  
})

export class MessageListComponent {}