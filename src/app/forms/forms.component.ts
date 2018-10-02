import { Component, OnInit, OnChanges } from "@angular/core";
import { MessageService } from "../services/message.service";
import { NgForm, FormGroup, FormBuilder, FormControl, FormsModule, ReactiveFormsModule, Validators }
 from "@angular/forms";
import { Patient } from "app/patient/hero-child/patient"
declare var $: any;

@Component({
    selector: "app-forms",
    templateUrl: "./forms.component.html",
    styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit, OnChanges {
    public patientForm: FormGroup;
    protected submitted: Boolean = false;

    constructor(private fb: FormBuilder) { }
    ngOnInit() {
        // this.patientForm = new FormGroup({
        //     name: new FormControl('', Validators.required),
        //     firstname: new FormControl('', Validators.required),
        //     adress:
        //     age: new FormControl('', Validators.required),
        //     gender: new FormControl('', Validators.required),
        // });
        this.patientForm = this.fb.group({
          name: this.fb.group({
            firstname: '', Validators.required,
            lastname: '', Validators.required,
          }), // the FormControl called "name"
          age: '2',
          address: 'buckingham palace'

      })
        console.log('FORM IS',this.patientForm.get('name').status);
    }

    ngOnChanges() {
      // LET TS LINT HAPPY
    }

    onSubmit(e: any) {
      e.preventDefault();
      // TODO: Use EventEmitter with form value
        this.patientForm.reset();
        console.warn(this.patientForm.value);
        console.log(this.patientForm.get('name').value);
        console.log(this.patientForm.errors);
    }

    onBlur(event: any) {
        if(this.patientForm.get(event.target.name).errors) {
            console.log(this.patientForm.get(event.target.name).errors);
        };
        console.log('NAME IS',this.patientForm.get('name').status);
    }

    get name() {
      return this.patientForm.get('name');
    }
    set name(arg: any) {
      // LEAVE EMPTY
    }

}
