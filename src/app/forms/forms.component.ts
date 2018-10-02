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

    public firstname: FormControl;
    public lastname: FormControl;
    public password: FormControl;
    public name: FormControl;
    public age: FormControl;
    public gender: FormControl;
    public patient: Patient;
    public myFormGroup: FormGroup;
    protected submitted: Boolean;

    constructor(private messageService: MessageService) { }
    ngOnInit() {
        this.submitted = false;
        this.myFormGroup = new FormGroup({
            password: new FormControl('', Validators.required),
            firstname: new FormControl('', Validators.required),
            age: new FormControl('', Validators.required),
            gender: new FormControl('', Validators.required),
        });
    }

    onSubmit(event: any) {
        event.preventDefault();
        this.submitted = true;
        console.log(this.myFormGroup.get('name').value);
        console.log(this.myFormGroup.errors);
    }

    onBlur(event: any) {
        if(this.myFormGroup.get(event.target.name).errors) {
            // this.messageService.add(this.myFormGroup.get(event.target.name).errors.toString());
            console.log(this.myFormGroup.get(event.target.name).errors);
        };
        console.log('NAME IS',this.myFormGroup.get('name').status);
    }

    ngOnChanges() {
        console.log(this.myFormGroup);
        this.myFormGroup.setValue({
            name: this.name,
            firstName: this.firstname,
        })
    }

}