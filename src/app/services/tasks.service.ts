import { Task } from './../interfaces/task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {


  tasks: Array<Task> = []
  constructor() {
    let savedTasks = localStorage.getItem('tasks');
    if (savedTasks){
      this.tasks = JSON.parse(localStorage.getItem('tasks'))
    }else{
      this.tasks = []
    }


   }

  deleteTask(i) {
    this.tasks.splice(i, 1);
    this.saveAll()
  }

  saveTask(taskTitle, taskDesc) {
    this.tasks.push({
      title: taskTitle,
      description: taskDesc
    });
    this.saveAll()
  }
  editTask(i, task: Task) {
    this.tasks[i] = task;
    this.saveAll()

  }
  saveAll(){
    localStorage.setItem('tasks',JSON.stringify(this.tasks))
  }

} 
