import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'dynamic'
})
export class DynamicPipe implements PipeTransform {

  transform(value: string, modifier: string) {
    if(!modifier) return value;
    // Evaluate pipe string
    return eval('this.' + modifier + '(\'' + value + '\')');
  }

  // Returns 'enabled' or 'disabled' based on input value
  statusFromBoolean(value:string):string {
    switch (value) {
      case 'true':
      case '1':
        return 'enabled';
      default:
        return 'disabled';
    }
  }
  // Returns a human friendly time format e.g: '14 minutes ago', 'yesterday'
  humanizeDate(value:string): any {
  // Humanize if date difference is within a week from now else returns 'December 20, 2016'

  if (moment().diff(moment(value), 'days') < 8) return moment(value).fromNow();
    return moment(value).format('MMMM Do YYYY');
  }
}

export const DYNAMIC_PIPES = [DynamicPipe];