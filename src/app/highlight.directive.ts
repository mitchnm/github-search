import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  constructor(private elem: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('#00FFFF');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }

  private highlight(color: string) {
    this.elem.nativeElement.style.backgroundColor = color;
  }
}