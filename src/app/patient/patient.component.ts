import { Component, OnInit, Input, HostListener } from '@angular/core';
import { FormsModule, FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
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
  public myForm: FormGroup;
  private submitted = false;
  public patient: Patient;
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
    this.patient.name = '';
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
  onSubmit(e: any) {
    e.preventDefault();
    this.submitted = true;
    this.master = "Master";
      console.log(this.myForm.errors);
      
    }
    
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl(),
      firstName: new FormControl()
    });
    this.patient = new Patient(11, 'Davis', 'Yves');
    this.getHeroes();
  }

}
