import { Directive, HostListener, Input } from '@angular/core';
import { ElementRef } from '@angular/core/src/linker/element_ref';
import { Renderer } from '@angular/core/src/render/api';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() // tslint: disable-line no-input-rename
  highlightColor: string;
  constructor(private el: ElementRef, _renderer: Renderer) {
    _renderer.setElementStyle(el.nativeElement, 'color', 'green');
  }
  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.highlightColor || 'red');
  }
  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
