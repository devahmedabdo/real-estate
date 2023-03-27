import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { register } from 'swiper/element';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor() {}
  year: number = new Date().getFullYear();
  ngOnInit(): void {
    // register();
    const swiper = new Swiper('.swiper', {
      autoplay: {
        delay: 5000,
      },
      // loop: true,
      slidesPerView: 3,

      // autoplay: {
      //   delay: 5000,
      //   disableOnInteraction: true,
      // },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        // 700: {
        //   slidesPerView: 1,
        //   spaceBetween: 0,
        // },
        800: {
          slidesPerView: 2,
        },
        // 900: {
        //   slidesPerView: 2,
        //   spaceBetween: 50,
        //   autoplay: false,
        // },
        1000: {
          slidesPerView: 3,
        },
      },
    });
  }
}
