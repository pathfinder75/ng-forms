import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";

@Component({
    selector: "app-forms",
    templateUrl: "./forms.component.html",
    styleUrls: ["./forms.component.css"]
})
export class FormsComponent {
    values = "";
    constructor() {
    }
    // avec (keyup)=onkey($event)
    // onKey(event: KeyboardEvent){
    //     this.values += (<HTMLInputElement>event.target).value + '|';
    // }
    // avec input tempate proerty #prenom et (keyup.enter)="onEnter()"
    onEnter(value: string){
        this.values = value;
    }
    // avec blur
    update(value: string){
        this.values = value;
    }

    reset(){
        this.values = "";
    }

}