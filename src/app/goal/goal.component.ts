import { Component, OnInit } from '@angular/core';
import { Goal } from '../goal'

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.css']
})
export class GoalComponent implements OnInit {

  goals: Goal[] = [
    new Goal(1, 'Watch finding Nemo', 'Find an onlone version and watch Merlin find his son', new Date(2020,3,14)),
    new Goal(2, 'Buy cookies', 'I have to buy cookies for the parrot', new Date(2020,6,9)),
    new Goal(3, 'Get new phone case', 'Diana has her birthday coming up', new Date(2021,1,12)),
    new Goal(4, 'Get dog food', 'Pupper likes expensive snacks', new Date(2020,5,18)),
    new Goal(5, 'Solve math homework', 'Love the math challenge', new Date(2020,7,14)),
    new Goal(6, 'Plot my world contingent plan', "Cause I'm Batman", new Date(2020,3,14))
  ];

  addNewGoal(goal) {
    let goalLength = this.goals.length;
    goal.id = goalLength + 1;
    goal.completeDate = new Date(goal.completeDate);
    this.goals.push(goal)
  }

  toggleDetails(index) {
    this.goals[index].showDescription = !this.goals[index].showDescription;
  }

  deleteGoal(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.goals[index].name}?`)

      if ( toDelete ) {
        this.goals.splice(index, 1);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
