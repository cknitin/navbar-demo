import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { IgxNavbarModule, IgxIconModule, IgxNavigationDrawerModule } from 'igniteui-angular';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { SettingsComponent } from './components/settings/settings.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AboutComponent } from './components/about/about.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SettingsComponent,
    DashboardComponent,
    AboutComponent
  ],
  imports: [
    FormsModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    IgxNavbarModule,
    IgxIconModule,
    IgxNavigationDrawerModule
  ],
  providers: [Location, {provide: LocationStrategy, useClass: PathLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
