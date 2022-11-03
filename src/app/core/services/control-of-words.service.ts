import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ControlOfWordsService {

  constructor() {
    console.log(this.rightWord);
  }

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
    if(this.validateWord(this.letterRow)) return this.theGameMessage$.next('¡Haz ganado!');
    this.nextRow();
    this.theGameMessage$.next('Tienes un nuevo intento');
  }

  theGameMessage$ = new Subject<string>();

  private validateLetterPosition(row: number) {
    const rightWordArray = Array.from(this.rightWord);

    this.arrayLetters[row].findIndex((letter: any, index) => {
      const indexRight = rightWordArray.indexOf(letter);

      if(indexRight === -1) {
        this.letterNotFound(row, index);
        return;
      }

      if(indexRight === index) {
        this.letterWin(row, index);
        return;
      }

      if(indexRight !== index) this.letterFound(row, index);
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
  }

  private getRightWord() {
    return this.wordsList[Math.floor(Math.random() * this.wordsList.length)];
  }

  getLetters() {
    return this.arrayLetters;
  }

  getStyles() {
    return this.arrayStyles;
  }

  private letterPosition = 0;

  private letterRow = 0;

  private arrayLetters: Array<String[]> = [ [],[],[],[],[],[] ];

  private arrayStyles: Array<String[]> = [
    ['letter', 'letter', 'letter', 'letter', 'letter'],
    ['letter', 'letter', 'letter', 'letter', 'letter'],
    ['letter', 'letter', 'letter', 'letter', 'letter'],
    ['letter', 'letter', 'letter', 'letter', 'letter'],
    ['letter', 'letter', 'letter', 'letter', 'letter'],
    ['letter', 'letter', 'letter', 'letter', 'letter'],
  ];

  private wordsList = [
    "ANDES",
    "AHORA",
    "BORRE",
    "CAFES",
    "CEJAS",
    "CLAVO",
    "CINCO",
    "CONOS",
    "CURSO",
    "DEBES",
    "DUNAS",
    "EDITA",
    "EMOJI",
    "ENOJO",
    "ERIZO",
    "ERRAR",
    "EUROS",
    "EVITA",
    "FOCOS",
    "FOTOS",
    "FRUTA",
    "FELIZ",
    "GAFAS",
    "GALAS",
    "GIROS",
    "GOLES",
    "HABLA",
    "HAGAN",
    "HEMOS",
    "HECHO",
    "HILOS",
    "HOJAS",
    "IDEAS",
    "ISLAS",
    "JERGA",
    "JOYAS",
    "JUGOS",
    "KOALA",
    "LATAS",
    "LAGOS",
    "LIMON",
    "LEGOS",
    "LEYES",
    "LIBRO",
    "LOROS",
    "LUCES",
    "LUNAS",
    "MARES",
    "MARCE",
    "METAS",
    "MILES",
    "MISMA",
    "MODOS",
    "MORRO",
    "MONOS",
    "MUEVE",
    "MULTA",
    "NABOS",
    "NUDOS",
    "NULOS",
    "OBRAS",
    "OLLAS",
    "ORDEN",
    "ONDAS",
    "PARES",
    "PALMA",
    "PESOS",
    "PACES",
    "PECES",
    "PALTA",
    "POCOS",
    "POCAS",
    "PRADO",
    "QUISE",
    "RATOS",
    "REDES",
    "REJAS",
    "RESTO",
    "REYES",
    "SABIA",
    "SALTA",
    "SERES",
    "SUELO",
    "TACOS",
    "TUBOS",
    "UNTES",
    "VALSA",
    "VASOS",
    "VELAS",
    "VOTOS",
    "WIKIS",
    "YOGUR",
    "YENES",
    "ZORRO"
  ];

  private rightWord = this.getRightWord();

}
