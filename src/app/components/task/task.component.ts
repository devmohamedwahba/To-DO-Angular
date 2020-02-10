import { Task } from './../../interfaces/task';
import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskId;
  task:Task;
  constructor(
    private route:ActivatedRoute,
    private taskserv:TasksService,
    private router:Router
    ) { }

  ngOnInit() {
    this.taskId = this.route.snapshot.paramMap.get('id');
    this.task = this.taskserv.tasks[this.taskId]

  }

  deleteTask(){
    this.taskserv.deleteTask(this.taskId);
    this.router.navigate(['/'])

  }
  saveTask(){
      this.taskserv.editTask(this.taskId, this.task);
      this.router.navigate(['/'])

      
  }



}
