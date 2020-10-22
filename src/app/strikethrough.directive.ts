import { Directive,ElementRef,HostListener} from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

    
  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    if(this.elem.nativeElement.style.textDecoration=='line-through'){
      this.textDeco("None")
    }else{
      this.textDeco("line-through")
    }
  }


  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }
}