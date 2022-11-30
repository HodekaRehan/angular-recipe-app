import { Directive, HostListener, HostBinding, ElementRef } from "@angular/core";

@Directive({
   selector: '[appDropdown]',
   exportAs: 'appDropdown'
})

export class DropdownDirective {
   @HostBinding('class.show') isOpen = false

   // @HostListener('click') toggleShow() {
   //    this.isOpen = !this.isOpen
   // }

   @HostListener('document:click', ['$event']) toggleShow(event: Event) {
      this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false
   }
   
   constructor(private elRef: ElementRef) {}
}