import { Directive } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Directive({
  selector: '[autocapitalize]'
})
export class AutocapitalizeDirective {
  values = "";
  constructor(el: ElementRef) { 
    el.nativeElement.style.backgroundColor = 'yellow';
    el.nativeElement.value = 'default';
  }

// format text to Uppercase
nomPropre(text: string){
    return text.charAt(0).toLocaleUpperCase() + text.slice(1).toLocaleLowerCase();
  }

// format text separate by a special character : -_/\()*
nomCompose(nom: any){
    let resultat = this.nomPropre(nom);
    let separateur = new RegExp(/[\u0020-\u002F]+/g);
    // check if separateur is a white space or tiret "-"
    // resultat.indexOf(" ") > 0 ? separateur = " " : separateur = "-";
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
