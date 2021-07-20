import { Component, VERSION } from '@angular/core';
import { ListTodoItemService } from './todo-app/list-todo-item/list-todo-item.service';
import { ITodoItem } from './todo-app/todo-item.model';

@Component({
  selector: 'todo-my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  constructor(private listItemService: ListTodoItemService) {}
  onNewItem(value: ITodoItem) {
    this.listItemService.add(value);
    console.log(`${this.listItemService.getAll().length}`);
  }
}
