import { Directive,ElementRef,HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class Highlight {

  constructor(private elem:ElementRef) { }
@HostListener('mouseenter') enter(){
  this.elem.nativeElement.style.backgroundColor='blue';
}
@HostListener('mouseenter') leave(){
  this.elem.nativeElement.style.backgroundColor='green';
}
}