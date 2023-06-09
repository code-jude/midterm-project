import { Injectable } from '@angular/core';
import { Job } from './models/job';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  jobList: Job[] = [{

    id: 1,
    title: "The Mayor",
    description: "Mayor em'",
    duration: "2 years",
    employer: "The US Government"
  },
  {
    id: 2,
    title: "The Police-Chief",
    description: "Keep em' rats under control",
    duration: "2 years",
    employer: "The US Government"
  },
  {
    id: 3,
    title: "The Editor-in-Chief ",
    description: "Direct the news",
    duration: "2 years",
    employer: "Kane Corp."
  },
  {
    id: 4,
    title: "The Businessman",
    description: "Fund whatever fills my pockets",
    duration: "N/A",
    employer: "Vulture Business"
  },
  {
    id: 5,
    title: "Wife #1",
    description: "Be a wife of the boss",
    duration: "How ever long he wants me",
    employer: "Kane Corp."
  },
  {
    id: 6,
    title: "The Politician",
    description: "I serve my own interests",
    duration: "As long as I can keep my seat at the table",
    employer: "Crow Business"
  },
  {
    id: 7,
    title: "Wife #2",
    description: "Be the boss' favorite wife",
    duration: "As long as I can keep him happy",
    employer: "Kane Corp."
  }]

  constructor() { }

  getJobs():Observable<Job[]> {
    return of(this.jobList)
  }

  // getJob():
}
