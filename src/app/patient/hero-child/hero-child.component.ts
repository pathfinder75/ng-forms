import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Patient } from "./patient";
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-hero-child',
  // template: `
  // <h3>{{name}} says:</h3>
  // <p>I, {{name}}, am at your service since I am {{name}}, master {{masterName}}.</p>
  // <button (click)="mafunc(true)">envoyer</button>
  // `,
  templateUrl: './hero-child.component.html',
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {
  @Input() hero: Patient; // tslint: disable-line no-input-rename
  // tslint:disable-next-line:no-input-rename
  @Input('master') master: string;
  @Input() id: number;
  private _name = '';
  
  @Output() onClick = new EventEmitter<boolean>();
  mafunc(agreed: boolean) {
    agreed = !agreed;
    this.onClick.emit(agreed);
  }
  
  @Input() // tslint: disable-line no-input-rename
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  get name(): string { return this._name; }
  constructor() { }

  ngOnInit() {
  }

}
