import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  github = "https://github.com/chboblie";
  mail = "mailto:amansanghvi@outlook.com.au";
  linkedin = "https://www.linkedin.com/in/aman-sanghvi-302";

  ngOnInit() {
  }

}
