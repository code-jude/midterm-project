import { Injectable } from '@angular/core';
import { Job } from './models/job';

@Injectable({
  providedIn: 'root'
})
export class JobServiceService {

  jobList: Job[] = [{
    id: 1,
    title: "Banker",
    description: "I was all about cash money",
    duration: "2 years",
    employer: "ABC BANKING"
  },
  {
    id: 2,
    title: "Sailor",
    description: "I was sailing all the live long day",
    duration: "2 years",
    employer: "ABC BANKING"
  },
  {
    id: 3,
    title: "Painter",
    description: "I was painting the town... every color that I was hired to",
    duration: "2 years",
    employer: "ABC BANKING"
  },
  {
    id: 4,
    title: "Fisherman",
    description: "I was fishing for souls",
    duration: "2 years",
    employer: "ABC BANKING"
  },
  {
    id: 5,
    title: "Baker",
    description: "I baked bread and other things",
    duration: "2 years",
    employer: "ABC BANKING"
  },
  {
    id: 6,
    title: "Investor",
    description: "I sowing into the kingdom of God",
    duration: "2 years",
    employer: "ABC BANKING"
  },
  {
    id: 7,
    title: "Farmer",
    description: "I was reaping my efforts from last season",
    duration: "2 years",
    employer: "ABC BANKING"
  }]

  constructor() { }
}
