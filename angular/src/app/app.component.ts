import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  victims: string[] = ['Test', 'One', 'Two'];
  nextId: number = 1;

  addNewVictim(victimName: string) {
    this.victims.push(victimName);
  }
}
