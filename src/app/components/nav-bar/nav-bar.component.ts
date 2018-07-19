import { Component, OnInit } from '@angular/core';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';

const CURRENT_VIEW = 'Ignite UI for Angular';
@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {
  public currentView: string;

  constructor(private _location: Location) { }

  public ngOnInit() {
    this.currentView = CURRENT_VIEW;
  }

  public navigateBack() {
    this._location.back();
  }

  public canGoBack() {
      return window.history.length > 0;
  }

}
