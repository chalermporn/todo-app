import { Component } from "@angular/core";
import { setTheme } from "ngx-bootstrap/utils";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  title = "todo-app";

  newTodo: string;
  todos: any;
  todoObj: any;

  constructor() {
    setTheme("bs4");
    this.newTodo = "";
    this.todos = [];
  }

  addTodo(event: any) {
    this.todoObj = {
      newTodo: this.newTodo,
      completed: false
    };
    this.todos.push(this.todoObj);
    this.newTodo = "";
    event.preventDefault();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }
}
