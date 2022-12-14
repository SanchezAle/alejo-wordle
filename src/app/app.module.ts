import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AngularMaterialModule } from './shared/angular-material/angular-material.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './core/components/dashboard/dashboard.component';
import { KeyboardComponent } from './core/components/keyboard/keyboard.component';
import { TheGameComponent } from './core/pages/the-game/the-game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalWindowComponent } from './feature/modal-window/modal-window.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    KeyboardComponent,
    TheGameComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
