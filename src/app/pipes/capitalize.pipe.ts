import { Pipe, PipeTransform } from '@angular/core';
import { lchmod } from 'fs';

@Pipe({
  name: 'capitalizepipe'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any): any {
    // handle 2 firstnames separated by 1 hyphen (-) or space
    let virgule, espace, point, tiret;
    [virgule, espace, point, tiret] = [","," ",".","-"];
    let capitalizeTabFunc = function(args, separateur){
      if(value.indexOf(separateur) > 0){
        let tab = value.split(separateur);
        let result = tab.map(function(elem){
          let fchar = elem.charAt(0);
          elem = fchar.toUpperCase() + elem.slice(1);
        });
        return result.join(separateur);
      } else {
        // get all white spaces that are not words
        return value.charAt(0) + value.slice(1);
      }
    }
  }
}