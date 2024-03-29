import { NgRedux, select } from '@angular-redux/store';
import { Component } from '@angular/core';
import { IAppState } from '../../store';
import { DECREMENT, INCREMENT } from '../actions';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
})
export class MessagesComponent {
  @select((s) => s.messaging.newMessages) newMessages;

  constructor(private ngRedux: NgRedux<IAppState>) {}

  increment() {
    this.ngRedux.dispatch({ type: INCREMENT });
  }

  decrement() {
    this.ngRedux.dispatch({ type: DECREMENT });
  }
}
