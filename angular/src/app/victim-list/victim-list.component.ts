import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-victim-list',
  template: `
    <ul class="victim-list">
      <li class="victim" *ngFor="let victim of victims">
        {{ victim }}
        <button class="victim-delete">✕</button>
      </li>
    </ul>
  `,
  styleUrls: ['./victim-list.component.css']
})
export class VictimListComponent implements OnInit {
  @Input() victims: string[];

  constructor() { }

  ngOnInit() {
  }

}
