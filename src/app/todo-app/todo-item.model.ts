export class TodoItem {
  id: string;
  value: string;
  constructor(todo: ITodoItem) {
    Object.assign(this, todo);
  }
}

export interface ITodoItem {
  id: string;
  value: string;
}
