import { Component, OnInit } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import * as $ from 'jquery';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css'],
})
export class AboutMeComponent implements OnInit {

  isOpen = false;
  closedText = "Learn more about me";
  openText = "Hide Panels"

  constructor() { }

  ngOnInit() {
  }

  toggleOpen()  {
    this.isOpen = !$("app-about-cards").is(":hidden");
    if(this.isOpen) {
      $("app-about-cards").slideUp();
      $("#pane-toggle").parent().removeClass("arrow-up").addClass("arrow");
      $("#pane-toggle").text(this.closedText);
    } else {
      $("app-about-cards").slideDown();
      $("#pane-toggle").parent().removeClass("arrow").addClass("arrow-up");
      $("#pane-toggle").text(this.openText);
    }
    this.isOpen = !this.isOpen;

  }

}
