import { Component, signal } from '@angular/core';
import { Greeting } from "../components/greeting/greeting";

@Component({
  selector: 'app-home',
  imports: [Greeting],
  templateUrl: './home.html',
  styleUrls: ['./home.scss'],
})
export class Home {
  welcome_message = signal('Hello user welcome to our page');

  keyUpHandler(event:KeyboardEvent) {
    console.log('user pressed $(event.key)');
  
  }

}