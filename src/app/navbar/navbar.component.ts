import { Component, OnInit } from '@angular/core';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  github = "https://github.com/chboblie";
  mail = "mailto:amansanghvi@outlook.com.au";
  linkedin = "https://www.linkedin.com/in/aman-sanghvi-302";

  openMe() {
    $("app-about-cards").slideDown();
  }
  ngOnInit() {
  }

}
