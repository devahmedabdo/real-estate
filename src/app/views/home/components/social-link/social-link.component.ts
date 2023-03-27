import { Component, OnInit } from '@angular/core';
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-social-link',
  templateUrl: './social-link.component.html',
  styleUrls: ['./social-link.component.scss'],
})
export class SocialLinkComponent implements OnInit {
  constructor() {}
  socialLinks: any[] = [
    {
      name: 'facebook',
      link: '',
      icon: faFacebookF,
    },
    {
      name: 'instagram',
      link: '',
      icon: faInstagram,
    },
    {
      name: 'phone',
      link: '',
      icon: faPhone,
    },
    {
      name: 'linkedin',
      link: '',
      icon: faLinkedinIn,
    },
  ];
  ngOnInit(): void {}
}
