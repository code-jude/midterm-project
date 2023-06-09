import { Component, OnInit } from '@angular/core';
import { JobServiceService } from '../job-service.service';
import { ActivatedRoute } from '@angular/router';
import { Job } from '../models/job';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css']
})
export class JobDetailsComponent implements OnInit{

  job? : Job;

constructor(private ourJobService: JobServiceService, private actRoute: ActivatedRoute){

}

  ngOnInit(): void {
    const id = this.actRoute.snapshot.params['jobId'];

    this.ourJobService.getJob(id).subscribe(result => {
      this.job = result;
    })
  }

}
