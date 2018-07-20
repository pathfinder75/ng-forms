import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
var upperCase = require('upper-case');
declare var $: any;

@Component({
    selector: "app-forms",
    templateUrl: "./forms.component.html",
    styleUrls: ["./forms.component.css"]
})
export class FormsComponent {
    value = "";
    constructor() {
    }

    update(value: string){
        this.value = value.toUpperCase();
    }
    
    // listen to the keyboard event of the user
    onKeyup(event: any){
        this.value = this.nomCompose((<HTMLInputElement>event.target).value);
    }

    reset(e: any){
        e.preventDefault();
        this.value = "";
    }

    // format any text to autocapitalize
    public nomPropre(text: string){
        return text.charAt(0).toLocaleUpperCase() + text.slice(1).toLocaleLowerCase();
      }
  
    nomCompose(nom: string){
        let resultat = this.nomPropre(nom);
        let separateur = new RegExp(/[\u0020-\u002F]+/g);
        
        if(separateur.test(resultat)){
            let sep;
            console.log(resultat.match(separateur));
            
            resultat.indexOf(" ") > 0 ? sep = " " : resultat.indexOf("-") > 0 ? sep = "-" : resultat.indexOf(".") ? sep = "." : sep = "_";

            console.log(sep);

            let indice = 0;

            while(resultat.indexOf(sep, indice) > 0){

                indice=resultat.indexOf(sep, indice);
                resultat = resultat.substring(0, indice+1)+this.nomPropre(resultat.substring(indice+1));
                indice++;

            }
        }
        return resultat;
    }
    ngOnInit() {
        // fonction qui récupère l'attribut autocapitalize de l'input field...
    }

}