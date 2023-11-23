import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[inputmode]'
})
export class InputmodeDirective {

  @Input() inputmode = "text"

  constructor(private el: ElementRef) { 
    this.el.nativeElement.inputmode = this.inputmode
  }

  @HostListener("keydown", ["$event"])
  onKeyDown(e: KeyboardEvent) {
    console.log(e.key)
    if (e.key.length == 1 && (this.inputmode == "numeric" || this.inputmode == "decimal")) {
      let pattern = new RegExp("[0-9]")
      if (!pattern.test(e.key)) e.preventDefault()
    }
  }

}
