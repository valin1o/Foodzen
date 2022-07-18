import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  // public date = new Date();

  // public person = {
  //   "firstName": "Dana",
  //   "lastName": "Popescu"

  // }

  title: string = 'Home title';
  buttonDisable: boolean = false;
  color: string = 'green';
  newTitle: string = '';

  constructor() {}

  ngOnInit(): void {}

  changeButton() {
    this.title = 'NEW TITLE';
    this.color = 'red';
  }

  changeTitle() {}
}
