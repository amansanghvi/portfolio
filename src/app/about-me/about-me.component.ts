import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {

  isOpen = true;
  state = 'open';
  constructor() { }

  ngOnInit() {
  }

  toggleOpen()  {
    this.isOpen = !this.isOpen;
    $("app-about-cards").slideToggle(400);
  }

  animate() {
      this.state = (this.state == 'open') ? 'closed' : 'open';
  }
}
