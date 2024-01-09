import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetter]'
})
export class BetterDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() defaultColor: string = 'transparent';
  @Input('appBetter') highlightColor: string = 'red';
  @Input() title: string = "This is title";

  @HostBinding('style.backgroundColor') background: string = this.defaultColor;
  @HostBinding('style.border') border: string = 'none';
  @HostBinding('style.transition') transition: string = '0s';
  @HostBinding('style.margin') margin: string = '10px 10px';
  @HostBinding('style.padding') padding: string = '10px 10px';

  ngOnInit() {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter() {
    this.background = this.highlightColor;
    this.border = 'red 2px solid';
    this.transition = 'opacity 0.5s ease';
    this.padding = '30px 30px';
  }

  @HostListener('mouseleave') mouseleave() {
    this.background = this.defaultColor;
    this.border = 'none';
    this.padding = '10px 10px';
  }

}
