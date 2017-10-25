import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-victim-list',
  template: `
    <ul class="victim-list">
      <li class="victim">
        Test
        <button class="victim-delete">✕</button>
      </li>
    </ul>
  `,
  styleUrls: ['./victim-list.component.css']
})
export class VictimListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
