import { Component, OnInit } from '@angular/core';
import {
  faChartPie,
  faHome,
  faSearch,
  faLocationArrow,
  faMap,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  location = faLocationArrow;
  pieceIcon = faChartPie;
  chartIcon = faMap;
  search = faSearch;

  city: boolean = false;
  chart: boolean = false;
  piece: boolean = false;
  constructor() {}
  startSearch: boolean = false;
  searchResult: any[] = [
    {
      piece: 'جده الشمالية',
      date: '1-1-2023',
      price: '332345ر.س',
      type: 'سكنى',
      space: '300متر',
      mPrice: '300ر.س',
    },
    {
      piece: 'جده الشمالية',
      date: '1-1-2023',
      price: '332345ر.س',
      type: 'سكنى',
      space: '300متر',
      mPrice: '300ر.س',
    },
    {
      piece: 'جده الشمالية',
      date: '1-1-2023',
      price: '332345ر.س',
      type: 'سكنى',
      space: '300متر',
      mPrice: '300ر.س',
    },
    {
      piece: 'جده الشمالية',
      date: '1-1-2023',
      price: '332345ر.س',
      type: 'سكنى',
      space: '300متر',
      mPrice: '300ر.س',
    },
    {
      piece: 'جده الشمالية',
      date: '1-1-2023',
      price: '332345ر.س',
      type: 'سكنى',
      space: '300متر',
      mPrice: '300ر.س',
    },
  ];
  ngOnInit(): void {
    let inputBox = document.querySelectorAll('.form-select > div:first-child');
    let inputBoxMenu = document.querySelectorAll(
      '.form-select > div:last-child'
    );
    let menu = document.querySelectorAll('.form-select > div:last-child > div');
    menu.forEach(function (menuItem) {
      menuItem.addEventListener('click', function () {
        menuItem.parentElement?.parentElement
          ?.querySelector('input')
          ?.setAttribute('value', menuItem.innerHTML);
      });
    });
  }
}
