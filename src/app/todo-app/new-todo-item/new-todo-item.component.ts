import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITodoItem } from '../todo-item.model';

@Component({
  selector: 'app-new-todo-item',
  templateUrl: './new-todo-item.component.html',
  styleUrls: ['./new-todo-item.component.css']
})
export class NewTodoItemComponent implements OnInit {
  newTodoItem: string = '';
  @Output('newItemEvent') newItemEvent: EventEmitter<
    ITodoItem
  > = new EventEmitter<ITodoItem>();
  constructor() {}

  ngOnInit() {}

  onNewItem() {
    if (this.newTodoItem == undefined || this.newTodoItem == '') {
      return;
    }

    this.newItemEvent.emit({
      id: 'new',
      value: this.newTodoItem.trim()
    });
    this.newTodoItem = '';
  }
}
