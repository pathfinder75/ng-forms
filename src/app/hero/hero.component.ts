import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Hero } from "./hero-child/hero";
import { HeroService } from "../services/hero.service";

@Component({
  selector: 'app-hero',
  // template: `
  // <h3>Master {{master}} controls {{names.length}} patients</h3>
  // <app-hero-child *ngFor="let name of names" [name]="name" [masterN]="master" (onClick)="update($event)"></app-hero-child>`,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  public formGroup = new FormGroup({
    name: new FormControl(),
  });
  public names = ['Mr IQ', 'Poison ivy', ' ', 'Bombastos']
  private masterN: string = "Yves";
  public heroes: Hero[];
  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe((value) => {
      this.heroes = value;
    });
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
    console.log(event);

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
