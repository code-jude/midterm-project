import { Injectable } from '@angular/core';
import { Job } from './models/job';

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
    title: "Police-Chief",
    description: "Keep em' rats under control",
    duration: "2 years",
    employer: "The US Government"
  },
  {
    id: 3,
    title: "Editor-in-Chief ",
    description: "Direct the news",
    duration: "2 years",
    employer: "Kane Corp."
  },
  {
    id: 4,
    title: "Businessman 1",
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
    title: "Investor",
    description: "Invest into which ever news segment paints me in the right light",
    duration: "2 years",
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
}
