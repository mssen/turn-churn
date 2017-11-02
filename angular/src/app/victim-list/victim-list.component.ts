import { Component, Input, Output, EventEmitter } from '@angular/core';
import Victim from '../victim';

@Component({
  selector: 'app-victim-list',
  template: `
    <ul class="victim-list">
      <li class="victim" *ngFor="let victim of victims">
        {{ victim.name }}
        <button (click)="deleteVictim(victim)" class="victim-delete">✕</button>
      </li>
    </ul>
  `,
  styleUrls: ['./victim-list.component.css']
})
export class VictimListComponent {
  @Input() victims: Victim[];
  @Output() onDeleteVictim: EventEmitter<Victim> = new EventEmitter();

  deleteVictim(victim: Victim) {
    this.onDeleteVictim.emit(victim);
  }
}
