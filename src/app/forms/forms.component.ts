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
        this.values = this.nomPropre(value);
    }
    

    onKeyup(event: any){
        this.values = this.nomCompose((<HTMLInputElement>event.target).value);
    }

    reset(){
        this.values = "";
    }

    // format text to Uppercase
    public nomPropre(text: string){
        return text.charAt(0).toLocaleUpperCase() + text.slice(1).toLocaleLowerCase();
      }
  
    nomCompose(nom: string){
        let resultat = this.nomPropre(nom);
        let separateur = new RegExp(/[\u0020-\u002F]+/g);
        
        if(separateur.test(resultat)){
            let sep;
            // let sep = resultat.match(separateur);
            // for (var elem of sep){
            //     console.log(elem);
            //     this.separer(elem, resultat);
            // }
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

}