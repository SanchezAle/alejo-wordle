import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { KeyboardComponent } from './core/components/keyboard/keyboard.component';
import { TheGameComponent } from './core/pages/the-game/the-game.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KeyboardComponent,
    TheGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
