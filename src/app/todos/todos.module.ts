import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoService } from './todo-list/todo.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';

@NgModule({
  declarations: [TodoListComponent, TodoDashboardComponent],
  imports: [CommonModule],
  exports: [TodoListComponent, TodoDashboardComponent],
  providers: [TodoService],
})
export class TodosModule {}
