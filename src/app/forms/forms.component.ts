import { Component } from "@angular/core";
import { OnInit } from "@angular/core/src/metadata/lifecycle_hooks";
import upperCase from 'upper-case'; //tslint:disable-line
declare var $: any;

@Component({
    selector: "app-forms",
    templateUrl: "./forms.component.html",
    styleUrls: ["./forms.component.css"]
})
export class FormsComponent {
    
    value: string = "";

    inputElement: HTMLInputElement

    constructor() {
        
    }
    
    update(value: string): any{
        this.value = upperCase(value);
    }

    onKeyup(event: any){
        
    }

    reset(e: any){
        this.value = "";
    }

    // format any text to autocapitalize

    public nomPropre(text: string){
        return text.charAt(0).toLocaleUpperCase() + text.slice(1).toLocaleLowerCase();
      }
  
    public nomCompose(nom: string){
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