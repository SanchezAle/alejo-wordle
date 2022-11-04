import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalWindowComponent>
  ) { }

  closeModal(): void {
    this.dialogRef.close();
  }

}
