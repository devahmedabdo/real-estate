import { Component, Input, OnInit, } from '@angular/core';
import { MainAdd } from 'src/app/interfaces/add';

@Component({
  selector: 'app-main-add',
  templateUrl: './main-add.component.html',
  styleUrls: ['./main-add.component.scss'],
})
export class MainAddComponent implements OnInit {
  @Input() mainAdd!: MainAdd;
  constructor() {}

  ngOnInit(): void {}
}
