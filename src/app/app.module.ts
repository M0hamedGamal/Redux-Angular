import { TodosModule } from './todos/todos.module';
import { MessagingModule } from './messaging/messaging.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { TodoService } from './todos/todo-list/todo.service';
import { IAppState, INITIAL_STATE, rootReducer } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgReduxModule, MessagingModule, TodosModule],
  providers: [TodoService],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
