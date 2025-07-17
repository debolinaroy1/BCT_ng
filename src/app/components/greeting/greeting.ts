import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-greeting',
  imports: [],
  templateUrl: './greeting.html',
  styleUrls: ['./greeting.scss'],
})
export class Greeting {
  private _message = signal('Hello');

  @Input()
  set message(value: string) {
    this._message.set(value);
  }
  get message(): string {
    return this._message();
  }
}
