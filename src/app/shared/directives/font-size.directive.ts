import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appFontSize]'
})
export class FontSizeDirective implements OnChanges{
  @Input() appFontSize:number=50;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.establecerFuente()
  }
  
  establecerFuente():void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'font-size',`${this.appFontSize}px`)
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.establecerFuente();
  }
}


