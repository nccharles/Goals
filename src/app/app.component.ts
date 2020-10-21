import { Component } from '@angular/core'; 

@Component({ 
	selector: 'app-root', 
	templateUrl: './app.component.html', 
	styleUrls: ['./app.component.css'] 
}) 
export class AppComponent { 

	/* An empty array that is responsible 
	to add a division */
	public items = []; 

	/* A two-way binding performed which 
	pushes text on division */
	public newGoal; 


	/* When input is empty, it will 
	not create a new division */
	public addToList() { 
		if (this.newGoal == '') { 
		} 
		else { 
			this.items.push(this.newGoal); 
			this.newGoal = ''; 
		} 
	} 

	/* This function takes to input the 
	task, that has to be deleted*/
	public deleteGoal(index) { 
    let toDelete = confirm(`Are you sure you want to delete ${this.items[index]}?`)

      if (toDelete){
        this.items.splice(index, 1); 
      }
		
	} 
} 
