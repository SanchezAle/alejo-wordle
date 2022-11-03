import { Component, OnInit } from '@angular/core';
import { fromEvent, tap } from 'rxjs';

import { ControlOfWordsService } from '../../services/control-of-words.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(
    private wordsService: ControlOfWordsService,
  ) { }

  arrayLetters = this.wordsService.getLetters();
  arrayStyles = this.wordsService.getStyles();
  message = '';
  playActive = true;

  onKeyUp$ = fromEvent<any>(document, 'keyup')
    .pipe(
      tap(() => this.message = ''),
      tap(event => {
        const pressedKey: string = event.key.toUpperCase();
        if(pressedKey.match(/[a-z]/i) && pressedKey.length == 1) return this.wordsService.addLetter(pressedKey);
        if(pressedKey == 'BACKSPACE') return this.wordsService.removeLetter();
        if(pressedKey == 'ENTER') this.wordsService.wordIsCorrect();
      })
    )
    .subscribe();

  onMessage$ = this.wordsService.theGameMessage$
      .pipe(
        tap(message => this.message = message),
      )
      .subscribe();

  ngOnInit(): void {
  }

}
