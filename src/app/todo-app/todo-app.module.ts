import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ListTodoItemComponent } from './list-todo-item/list-todo-item.component';
import { NewTodoItemComponent } from './new-todo-item/new-todo-item.component';
import { HelloComponent } from '../hello.component';
import { ListTodoItemService } from './list-todo-item/list-todo-item.service';

@NgModule({
  imports: [CommonModule, BrowserModule],
  declarations: [HelloComponent, NewTodoItemComponent, ListTodoItemComponent],
  providers: [ListTodoItemService]
})
export class TodoAppModule {}
