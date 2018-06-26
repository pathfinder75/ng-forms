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
    values = "";
    constructor() {
    }

    update(value: string){
        this.values = value.toUpperCase();
        // this.values = value;
    }
    
    // listen to the keyboard event of the user
    onKeyup(event: any){
        // this.values = this.nomPropre((<HTMLInputElement>event.target).value);
    }

    reset(){
        this.values = "";
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
        $('input').keyup(function(e){
            console.log(upperCase('iii', 'tr'));
        });
        $('input').each(function(i){
            if($(this).prop("autocapitalize") === "words"){
                // add the  autocapitalize css class
                $(this).addClass('autocapitalize');
            }
            if($(this).prop("autocapitalize") === "none" || $(this).prop("autocapitalize") === "off")
            {
                // leave it as it is as default : do nothing
            }
            if($(this).prop("autocapitalize") === "sentences" || $(this).prop("autocapitalize") === "on")
            {
                $(this).on("keyup", function(e) {
                    var inp = String.fromCharCode(e.keyCode);
                    if (/[a-zA-Z0-9-_ ]/.test(inp)) {
                        var val = $(this).val().toLocaleUpperCase();
                        var type = $(this).prop("autocapitalize");
                        if ( type === "words" || type === "sentences" ) {
                            var split_identifier = type === "words" ? " " : ". ";
                            var split = val.split(split_identifier);
                            $.each(split, function(i, v){
                                if ( v.length ) {
                                    split[i] = v.charAt(0).toUpperCase() + v.substring(1);
                                }
                            });
                            val = split.join(split_identifier);
                        } else if ( type === "characters" ) {
                            val = upperCase(val);
                        }
                        $(this).val(val);
                    }
                });
            }
            if($(this).prop("autocapitalize") === "characters")
            {
                $(this).addClass('uppercase');
            }
            
        });
    }

}