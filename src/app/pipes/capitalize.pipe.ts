import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizepipe'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    // handle 2 firstnames separated by 1 (-)
    let tab = value.split('-').map(function(elem){
      let fchar = elem.charAt(0);
      return elem = fchar.toUpperCase() + elem.slice(1);
    });
    return tab.join('-');
  }
  // format any text to autocapitalize

  public upperCaseFirst(text: string) {
    return text.charAt(0).toLocaleUpperCase() + text.slice(1).toLocaleLowerCase();
  }

  public upperCaseEach(nom: string) {
    let resultat = this.upperCaseFirst(nom);
    let separateur = new RegExp(/[\u0020-\u002F]+/g);

    if (separateur.test(resultat)) {
      let sep;
      console.log(resultat.match(separateur));

      let indice = 0;

      while (resultat.indexOf(sep, indice) > 0) {

        indice = resultat.indexOf(sep, indice);
        resultat = resultat.substring(0, indice + 1) + this.upperCaseFirst(resultat.substring(indice + 1));
        indice++;

      }
    }
    return resultat;
  }

}