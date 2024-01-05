import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetter]'
})
export class BetterDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor') background: string = 'transparent';
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.transition') transition: string = '0s';
  @HostBinding('style.margin') margin: string =  '10px 10px';
  @HostBinding('style.padding') padding: string = '10px 10px';

  @HostListener('mouseenter') mouseenter(){
    this.background = 'pink';
    this.border = 'red 2px solid';
    this.transition = 'opacity 0.5s ease';
    this.padding = '30px 30px';
  }

  @HostListener('mouseleave') mouseleave(){
    this.background = 'transparent';
    this.border = 'none';
    this.padding = '10px 10px';

  }

}
