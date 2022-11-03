import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularMaterialModule } from './shared/angular-material/angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { KeyboardComponent } from './core/components/keyboard/keyboard.component';
import { TheGameComponent } from './core/pages/the-game/the-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KeyboardComponent,
    TheGameComponent
  ],
  imports: [
    AngularMaterialModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
