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

    onEnter(value: string){
        this.values = value;
    }

    update(value: string){
        this.values = value;
    }

    reset(){
        this.values = "";
    }

}