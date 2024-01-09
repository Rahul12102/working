import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[setBackground]'
})

export class SetBackgroundDirective{

    constructor(private element: ElementRef){
    }

    ngOnInit(){
        this.element.nativeElement.style.backgroundColor = 'lightgreen';

    }
}