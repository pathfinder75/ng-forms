import { Directive, Input, Output, HostListener } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';

@Directive({
  selector: '[autocapitalize]'
})
export class AutocapitalizeDirective {
  @Input('autocapitalize') // tslint: disable-line no-input-rename
  @HostListener('keyup.enter')
  onEnter() {
  // uppercase my textn
  }
  constructor(private el: ElementRef) {
  }

// format text to Uppercase
  autouppercase(text: string) {
    return text.charAt(0).toLocaleUpperCase() + text.slice(1).toLocaleLowerCase();
  }

// format text separate by a special character :
  uppercase(value: string) {
    return value.toLocaleUpperCase();
  }
  lowercase(value: string) {
    return this.el.nativeElement.value.toLocaleUpperCase();
  }
}
