import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Hero } from "./hero";
import { Output } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-hero-child',
  template: `
  <h3>{{name}} says:</h3>
  <p>I, {{name}}, am at your service since I am {{name}}, master {{masterName}}.</p>
  <button (click)="mafunc(true)">envoyer</button>
  `,
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {
  @Input('masterN') masterName: boolean;
  
  @Output() onClick = new EventEmitter<boolean>();
  mafunc(agreed: boolean) {
    agreed = !agreed;
    this.onClick.emit(agreed);
  }
  // tslint: disable-line no-input-rename
  // @Input() hero: Hero = {
  //   name: null,
  //   age: 26,
  // }
  private _name = '';
  @Input()
  set name(name: string) {
    this._name = (name && name.trim()) || '<no name set>';
  }
  get name(): string { return this._name; }
  // @Input('master') // tslint: disable-line no-input-rename
  constructor() { }

  ngOnInit() {
  }

}
