import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-victim',
  template: `
    <div class="add-container">
      <input
        class="victim-input"
        type="text"
        placeholder="The next victim..."
        autoFocus />
      <button class="add-button">+ Add</button>
    </div>
  `,
  styleUrls: ['./add-victim.component.css']
})
export class AddVictimComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
