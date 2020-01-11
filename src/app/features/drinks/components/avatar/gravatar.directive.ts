import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { Md5 } from 'ts-md5';

@Directive({
  selector: '[appGravatar]'
})
export class GravatarDirective {

  @Input() set email(value: string) {
    this.updateGravatar(value);
  }
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  updateGravatar(email: string) {

    console.log(email);
    console.log(this.el.nativeElement);
    if (!email) {
      console.log('return');
      return;
    }

    const emailHash = Md5.hashStr(email.trim().toLowerCase());
    console.log(emailHash);
    this.renderer.setAttribute(this.el.nativeElement, 'src', `//www.gravatar.com/avatar/${emailHash}?d=wavatar`);
  }

}
