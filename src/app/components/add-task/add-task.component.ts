import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {

  constructor(
    private taskServ:TasksService,
    private router:Router,
    private title:Title
    ) { }

  ngOnInit() {
    this.title.setTitle('Add Task')
  }
  saveTask(taskTitle,taskDesc){
    this.taskServ.saveTask(taskTitle.value,taskDesc.value)
    this.router.navigate(['/'])
  }

}
