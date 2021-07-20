import { ITodoItem } from '../todo-item.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListTodoItemService {
  private items: ITodoItem[] = [];
  constructor() {}

  add(item: ITodoItem) {
    console.log(`pus all invoked`);
    item.id = '' + this.items.length;

    this.items.push(item);
  }

  public getAll(): ITodoItem[] {
    console.log(`get all invoked`);

    return [...this.items];
  }

  public removeAll() {
    console.log(`Remove all invoked`);
    this.items = [];
  }
}
