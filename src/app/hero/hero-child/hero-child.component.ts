import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core/src/metadata/directives';
import { Hero } from "./hero";

@Component({
  selector: 'app-hero-child',
  template: `
  <h3>{{name}} says:</h3>
  <p>I, {{name}}, am at your service since I am {{name}}, master {{masterName}}.</p>
  `,
  styleUrls: ['./hero-child.component.css']
})
export class HeroChildComponent implements OnInit {
  @Input('master') masterName: string; // tslint: disable-line no-input-rename
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
