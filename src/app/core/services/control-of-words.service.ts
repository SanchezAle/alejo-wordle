import { Injectable } from '@angular/core';
import { Subject, tap, catchError, EMPTY } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';

import { ModalWindowComponent } from 'src/app/feature/modal-window/modal-window.component';
import { RandomWordService } from './random-word.service';

@Injectable({
  providedIn: 'root'
})
export class ControlOfWordsService {

  constructor(
    private randomWord: RandomWordService,
    private dialog: MatDialog,
  ) {
    this.rightWord$.subscribe();
  }

  private rightWord = '';

  theGameMessage$ = new Subject<string>();

  private letterPosition = 0;

  private letterRow = 0;

  private attempts = 1;

  rightWord$ = this.randomWord.getRandomWord()
    .pipe(
      tap(word => this.rightWord = word),
      catchError(() => {
        this.rightWord = this.randomWord.getRightWord();
        console.log(this.rightWord);
        return EMPTY;
      }),
    )

  addLetter(key: string) {
    if(this.letterPosition > 4) return;
    this.arrayLetters[this.letterRow].push(key);
    this.activeLetter(this.letterRow, this.letterPosition);
    this.letterPosition++;
  }

  removeLetter() {
    if(this.letterPosition < 1) return;
    this.letterPosition--;
    this.arrayLetters[this.letterRow].pop();
    this.desactiveLetter(this.letterRow, this.letterPosition);
  }

  wordIsCorrect() {
    if(this.arrayLetters[this.letterRow].length < 5) return this.theGameMessage$.next('¡Te faltan letras!');
    this.validateLetterPosition(this.letterRow);

    if(this.validateWord(this.letterRow)) {
      
      const instructions = 
        `¡Felicidades campeon! Acabas de acertar cada una de las letras correctas y has culminado el juego,
        pulsa en el siguiente botón para volver a jugar:`

      this.openModalWindows(instructions);
      this.theGameMessage$.next('¡Haz ganado!');
      return;
    }

    if(this.attempts == 6) {

      const instructions = 
        `Game Over.. ¡Pero no te desanimes mi amigo! aún tienes oportunidad de ganar, 
        presiona el siguiente boton para jugar de nuevo:`

      this.openModalWindows(instructions);
      this.theGameMessage$.next('Haz perdido :(');
      return;

    }

    this.nextRow();
    this.theGameMessage$.next('Tienes un nuevo intento');
  }

  private validateLetterPosition(row: number) {
    const rightWordArray = Array.from(this.rightWord);

    this.arrayLetters[row].findIndex((letter: any, index: number) => {    
      if(letter === rightWordArray[index]) return this.letterWin(row, index);
      if(rightWordArray.includes(letter)) return this.letterFound(row, index);
      this.letterNotFound(row, index);
    });
  }

  private openModalWindows(instructions: string): void {

    const dialogRef = this.dialog.open(ModalWindowComponent, {
      width: '400px',
      data: instructions,
    });
    
  }

  private activeLetter(row: number, position: number) {
    this.arrayStyles[row][position] = 'letter filled-letter';
  }

  private desactiveLetter(row: number, position: number) {
    this.arrayStyles[row][position] = 'letter';
  }

  private letterNotFound(row: number, position: number) {
    this.arrayStyles[row][position] += ' letter-grey';
  }

  private letterFound(row: number, position: number) {
    this.arrayStyles[row][position] += ' letter-yellow';
  }

  private letterWin(row: number, position: number) {
    this.arrayStyles[row][position] += ' letter-green';
  }

  private validateWord(letterRow: number) { 
    return this.arrayLetters[letterRow].join('') == this.rightWord;
  }

  private nextRow() {
    this.letterPosition = 0;
    this.letterRow++;
    this.attempts++;
  }

  getLetters() {
    return this.arrayLetters;
  }

  getStyles() {
    return this.arrayStyles;
  }

  newGame() {
    this.letterPosition = 0;
    this.letterRow = 0;
    this.attempts = 1;
    this.theGameMessage$.next('');
    
    this.arrayLetters.forEach(rows => rows.length = 0);

    let count = 0;
    this.arrayStyles.forEach(rows => {
      rows.findIndex((letter, index) => this.desactiveLetter(count, index));
      count++;     
    });

    this.rightWord$.subscribe();

  }

  private arrayLetters: Array<String[]> = [ [],[],[],[],[],[] ];

  private arrayStyles: Array<String[]> = [
    ['letter', 'letter', 'letter', 'letter', 'letter'],
    ['letter', 'letter', 'letter', 'letter', 'letter'],
    ['letter', 'letter', 'letter', 'letter', 'letter'],
    ['letter', 'letter', 'letter', 'letter', 'letter'],
    ['letter', 'letter', 'letter', 'letter', 'letter'],
    ['letter', 'letter', 'letter', 'letter', 'letter'],
  ];

}
