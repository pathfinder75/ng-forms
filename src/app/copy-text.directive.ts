import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[text-copy]'
})
export class TextCopyDirective {

  // parse attribute value into a 'text' variable
  @Input('text-copy') text: string;
  constructor() { }
  @HostListener('click') CopyText() {
    var textArea = document.createElement("textarea");
    textArea.style.position = 'fixed';
    textArea.style.top = '-999px';
    textArea.style.left = '-999px';
    textArea.style.width = '2em';
    textArea.style.height = '2em';
    textArea.style.padding = '0';
    textArea.style.border = 'none';
    textArea.style.outline = 'none';
    textArea.style.boxShadow = 'none';
    textArea.style.background = 'transparent';

    // set the text area value
    textArea.value = this.text;
    document.body.appendChild(textArea);

    textArea.select();

    try {
      // for old browser who don't support execCommand
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      // let user know the text is copied
      console.log(msg);

    } catch (err) {
      // Tell the user copying is not supported
      console.log('unable to copy');
    }
      // finally we remove the textarea from the DOM
      document.body.removeChild(textArea);
  }
}

export const TEXT_COPY_DIRECTIVES = [TextCopyDirective];
