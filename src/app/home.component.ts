import { Component, OnInit } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  title = "Welcome to my test app";
  ngOnInit() {
  }

}
