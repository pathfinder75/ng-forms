import { Pipe, PipeTransform } from '@angular/core';
import { lchmod } from 'fs';

@Pipe({
  name: 'capitalizepipe'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any): any {
    function nomPropre(text: string){
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    function nomCompose(nom: string){
      let resultat = nomPropre(nom);
      // let separateur = new RegExp(/\W+\b/g);
      let separateur;
      // check if separateur is a white space or tiret "-"
      resultat.indexOf(" ") > 0 ? separateur = " " : separateur = "-";
      resultat = resultat.replace(separateur, " ");
      let indice = 0;
      while(resultat.indexOf(" ", indice) > 0){
        indice=resultat.indexOf(" ", indice);
        resultat = resultat.substring(0, indice+1)+nomPropre(resultat.substring(indice+1));
        indice++;
      }

      return resultat;
    }
    return nomCompose(value);
  }

}