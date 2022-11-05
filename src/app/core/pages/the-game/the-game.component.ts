import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { ModalWindowComponent } from 'src/app/feature/modal-window/modal-window.component';

@Component({
  selector: 'app-the-game',
  templateUrl: './the-game.component.html',
  styleUrls: ['./the-game.component.scss']
})
export class TheGameComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  openModalWindows(): void {

    const instructions = 
      `Alejo Wordle es un juego de palabras construido en Angular.
      Consiste en adivinar una palabra de 5 letras,
      para lograrlo tienes hasta 6 intentos, pero el juego te da pistas:
      Escribe letra a letra una palabra cualquiera, si la letra coincide
      con alguna letra de la palabra correcta, ella se teñira de amarillo,
      mejor aún, si la letra esta en la posicion correcta, se teñira de verde.
      Sin embargo, si te has equivocado de letra, simplemente será gris.
      ¡Ok, es momento de jugar!`

    const dialogRef = this.dialog.open(ModalWindowComponent, {
      width: '400px',
      data: instructions,
    });
    
  }

  ngOnInit(): void {
  }

}
