import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  job : Job [] = [];

constructor (private ourJobService : JobServiceService ){

}

  ngOnInit(): void {
    this.job = this.ourJobService.jobList;
  }

}
