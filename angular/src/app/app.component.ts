import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  victims: string[] = [];
  nextId: number = 1;

  addNewVictim(victimName: string) {
    this.victims.push(victimName);
  }
}
