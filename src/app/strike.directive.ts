import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrike]'
})
export class StrikeDirective {

  constructor() { }
  @HostBinding('style.text-decoration') strike:string=""
  
  @HostListener('click') strikeOut(){
    if (this.strike===""){
    this.strike='line-through'}
   
  
  else {
    this.strike=""
  }


}
}
