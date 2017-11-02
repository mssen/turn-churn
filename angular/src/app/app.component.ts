import { Component } from '@angular/core';
import Victim from './victim';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  victims: Victim[] = [];
  nextId: number = 1;

  addNewVictim(victimName: string) {
    this.victims.push(new Victim(this.nextId++, victimName));
  }

  deleteVictim(victim: Victim) {
    const victimIndex = this.victims.indexOf(victim);
    this.victims.splice(victimIndex, 1);
  }

  clear() {
    this.victims = [];
  }
  
  submit() {
    const ids = Object.keys(this.victims);
    const randomId = ids[Math.floor(Math.random() * ids.length)];
    const theChosen = this.victims[randomId];
    alert(`It's ${theChosen.name}'s turn!`);
    this.clear();
  }
}
