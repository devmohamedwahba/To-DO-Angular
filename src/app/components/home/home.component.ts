 import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(
    private taskserv:TasksService,
    private title:Title) { 


    }

  ngOnInit() {
    this.title.setTitle('Task Manger')
  }
  deleteTask(i){
    this.taskserv.deleteTask(i)
  }

   x = 0;



}
