import { Component, OnChanges, OnInit } from '@angular/core';
import { ITodoItem } from '../todo-item.model';
import { ListTodoItemService } from './list-todo-item.service';

@Component({
  selector: 'app-list-todo-item',
  templateUrl: './list-todo-item.component.html',
  styleUrls: ['./list-todo-item.component.css']
})
export class ListTodoItemComponent implements OnInit {
  items: ITodoItem[];
  currentPage = 1;
  maxItemsInPage = 10;
  showNextPage = false;
  counter = 0;
  constructor(private listTodoItemService: ListTodoItemService) {}
  getItems() {
    return this.listTodoItemService.getAll();
  }
  ngOnInit() {}

  clearItems() {
    this.listTodoItemService.removeAll();
  }
}
