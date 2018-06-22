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

    update(value: string){
        this.values = this.nomCompose(value);
    }
    

    onKeyup(event: any){
        this.values = this.nomCompose((<HTMLInputElement>event.target).value);
        console.log(this.values);
    }

    reset(value = ""){
        this.values = "";
    }

    // format text to Uppercase
    nomPropre(text: string){
        return text.charAt(0).toLocaleUpperCase() + text.slice(1).toLocaleLowerCase();
      }
  
    nomCompose(nom: any){
        let resultat = this.nomPropre(nom);
        let separateur = new RegExp(/[\u0020-\u002F]+/g);
        // check if separateur is a white space or tiret "-"
        resultat = resultat.replace(separateur, " ");
        let indice = 0;
        while(resultat.indexOf(" ", indice) > 0){
          indice=resultat.indexOf(" ", indice);
          resultat = resultat.substring(0, indice+1)+this.nomPropre(resultat.substring(indice+1));
          indice++;
        }
  
        return resultat;
      }

}