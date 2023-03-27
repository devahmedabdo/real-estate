import { Component, OnInit } from '@angular/core';
import { faFacebookF, faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faBuilding,
  faMinusCircle,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sec-add',
  templateUrl: './sec-add.component.html',
  styleUrls: ['./sec-add.component.scss'],
})
export class SecAddComponent implements OnInit {
  constructor() {}
  miniAdd: any = {
    name: 'مكتب العمار للاستثمار العقاري',
    loaction: 'الرياض - الرياض - الرياض',
    facebook: 'مكتب العمار للاستثمار العقاري',
    phone: 'مكتب العمار للاستثمار العقاري',
    instagram: 'مكتب العمار للاستثمار العقاري',
    logo: 'logo2.png',
    services: [
      `لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه`,
      `لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه`,
      `لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه`,
      `لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه`,
      `لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه`,
      `لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه`,
      `لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه`,
      `لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه`,
    ],
  };
  showBack: boolean = false;
  facebook = faFacebookF;
  instagram = faInstagram;
  phone = faPhone;
  building = faBuilding;
  ngOnInit(): void {}
}
