import { Component, OnInit } from '@angular/core';
import {
  faChartPie,
  faLocationArrow,
  faMap,
  faSearch,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import Swiper from 'swiper';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent implements OnInit {
  constructor() {}
  location = faLocationArrow;
  pieceIcon = faChartPie;
  chartIcon = faMap;
  search = faSearch;
  user = faUser;
  city: boolean = false;
  chart: boolean = false;
  piece: boolean = false;
  startSearch: boolean = false;

  ngOnInit(): void {}
}
