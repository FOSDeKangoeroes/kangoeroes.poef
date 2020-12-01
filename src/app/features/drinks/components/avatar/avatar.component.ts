import { Component, OnInit, Input } from '@angular/core';
import { Md5 } from 'ts-md5/dist/md5';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent implements OnInit {

  @Input() size = '50px';
  @Input() value: string;

  @Input() email: string;

  styles: any;
  constructor() { }

  ngOnInit() {
    this.styles = {
      lineHeight: this.size,
      width: this.size,
      height: this.size,
    };
  }

}
