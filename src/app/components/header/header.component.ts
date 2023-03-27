import { Component, OnInit } from '@angular/core';
import { faFacebook, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor() {}
  // facebook = faFace;
  phone = faMobile;
  facebook = faFacebookF;
  ngOnInit(): void {}
}
