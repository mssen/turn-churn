import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-victim',
  template: `
    <div class="add-container">
      <input
        class="victim-input"
        type="text"
        placeholder="The next victim..."
        autoFocus
        (keyup.enter)="addVictim(newVictim)"
        #newVictim />
      <button class="add-button" (click)="addVictim(newVictim)">+ Add</button>
    </div>
  `,
  styleUrls: ['./add-victim.component.css']
})
export class AddVictimComponent {
  @Output() onAddVictim: EventEmitter<string> = new EventEmitter();

  addVictim(newVictim: HTMLInputElement) {
    this.onAddVictim.emit(newVictim.value);
    newVictim.value = '';
  }

}
