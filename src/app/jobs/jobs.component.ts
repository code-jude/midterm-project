import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { Job } from '../models/job';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {

  jobs: Job[] = [];

  job?: Job;

  constructor(private ourJobService: JobServiceService, private actRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.ourJobService.getJobs().subscribe(response => this.jobs = response);

    const id = this.actRoute.snapshot.params['jobId'];

    this.ourJobService.getJob(id).subscribe(result => {
      this.job = result;
    })

  }
}
