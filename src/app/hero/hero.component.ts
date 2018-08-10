import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hero',
  template: `
  <h2>Master controls {{names.length}} heroes</h2>
  <app-hero-child *ngFor="let name of names" [name]="name"></app-hero-child>`,
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public formGroup = new FormGroup({
    name: new FormControl(),
  });
  @Input()
  public master: string;
  names = ['Mr IQ', ' ', 'Bombastos'];
  submit(event: any) {
    // console.log(event);
    // if(event.target){
    //   this.masterName = event.target.value;
    //   console.log(event.target.value);
    // }
    this.master = this.formGroup.value.name;
    console.log(this.formGroup.value.name);
  }
  constructor() { }

  ngOnInit() {
  }

}
