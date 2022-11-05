import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';

import { RandomWord } from '../models/random-word.model';

@Injectable({
  providedIn: 'root'
})
export class RandomWordService {

  constructor(
    private http: HttpClient,
  ) { }

  url = 'https://palabras-aleatorias-public-api.herokuapp.com/random-by-length?length=5';

  private removeAccentsMark(word: string) {
    return word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }

  getRandomWord() {
    return this.http.get<RandomWord>(this.url)
      .pipe(
        map(word => this.removeAccentsMark(word.body.Word)),
        map(word => word.toUpperCase()),
        tap(word => console.log(word)),
      );
  }

  getRightWord() {
    return this.wordsList[Math.floor(Math.random() * this.wordsList.length)];
  }

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
}
