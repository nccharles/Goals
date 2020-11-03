import { goals } from './../goals';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  getGoals(){
    return goals
  }
  constructor() { }
}
