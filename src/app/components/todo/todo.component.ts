import { Component, HostBinding, HostListener, OnInit } from '@angular/core';

export interface Todo {
  content: string;
  completed: boolean;
}
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  constructor() {}

  todo: Todo[]=[];
  new: string="";

  ngOnInit(): void {
    
  }

  addTask() {
    if (this.new !== '') {
      this.todo.push({ content: this.new, completed: false });
      this.new = '';
    }
  }
  removeTask(event: any) {
    let index=event.target.value;
    this.todo.splice(index,1)
    // console.log(this.todo)
  }
  onClick(i:number){
    // console.log(this.todo)
    this.todo[i].completed=!this.todo[i].completed
    
  }
}
