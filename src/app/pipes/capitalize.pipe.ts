import { Pipe, PipeTransform } from '@angular/core';
import { lchmod } from 'fs';

@Pipe({
  name: 'capitalizepipe'
})
export class CapitalizePipe implements PipeTransform {
  transform(value: any): any {
    // handle 2 firstnames separated by 1 hyphen (-)
      let capitalizeTab = function(args){
        // args = Array.prototype.slice.call(arguments);
        // console.log(args);
        return args.map(function(elem){
          let fchar = elem.charAt(0);
          elem = fchar.toUpperCase() + elem.slice(1);
          console.log(elem);
          return elem;
        });
      };
      if(value.indexOf('-') > 0){
        let tab = value.split('-');
        let result = capitalizeTab(tab);
        return result.join('-');
      } else {
        // get all white spaces that are not words
        // var regexp = new RegExp(/\W/g);
        let tab = value.split(' ');
        let result = capitalizeTab(tab);
        return result.join(' ');
      }

  }

}