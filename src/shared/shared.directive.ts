import { Directive } from '@angular/core';

@Directive({
  selector: '[appShared]',
  standalone: true
})
export class SharedDirective {

  constructor() { }

}
