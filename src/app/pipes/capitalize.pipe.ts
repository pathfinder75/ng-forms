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

}