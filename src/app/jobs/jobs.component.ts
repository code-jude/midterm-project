import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { Job } from '../models/job';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Job[] = [];

  constructor(private ourJobService: JobServiceService) {

  }

  ngOnInit(): void {
    this.ourJobService.getAllJobs().subscribe(response => this.jobs = response);
  }

}
