import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Patient } from "./hero-child/patient";
import { HeroService } from "../services/hero.service";

@Component({
  selector: 'app-patient',
  // template: `
  // <h3>Master {{master}} controls {{names.length}} patients</h3>
  // <app-hero-child *ngFor="let name of names" [name]="name" [masterN]="master" (onClick)="update($event)"></app-hero-child>`,
  templateUrl: './patient.component.html',
  styleUrls: ['./hero.component.css']
})
export class PatientComponent implements OnInit {
  public formGroup = new FormGroup({
    name: new FormControl(),
  });
  public names = ['Mr IQ', 'Poison ivy', ' ', 'Bombastos']
  private masterN: string = "Yves";
  public heroes: Patient[];
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe((value) => {
      this.heroes = value;
    });
  }
  clear() {
    this.formGroup.setValue({name: ""});
  }
  @Input() set master(name){
    this.masterN = name;
  };
  get master(): string {
    return this.masterN;
  }
  update(response: boolean) {
    this.masterN = String(response);
  }
  submit(event: any) {
    event.preventDefault();
    try {
      this.master = this.formGroup.value.name;
    } catch (error) {
      console.log(error);
      
    }
    
  }
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
