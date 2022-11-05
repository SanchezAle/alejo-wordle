import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { MessageModal } from '../modals/message-modal.model';
import { ControlOfWordsService } from 'src/app/core/services/control-of-words.service';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})
export class ModalWindowComponent {

  constructor(
    public dialogRef: MatDialogRef<ModalWindowComponent>,
    private controlWords: ControlOfWordsService,
    @Inject(MAT_DIALOG_DATA) public message: MessageModal
  ) { }

  closeModal(): void {
    this.controlWords.newGame();
    this.dialogRef.close();
  }

}
