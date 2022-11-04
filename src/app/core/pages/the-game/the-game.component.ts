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

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalWindowComponent, {
      width: '400px',
    });
  }

  ngOnInit(): void {
  }

}
