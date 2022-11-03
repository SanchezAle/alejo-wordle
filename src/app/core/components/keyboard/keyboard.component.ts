import { Component, OnInit } from '@angular/core';
import { ControlOfWordsService } from '../../services/control-of-words.service';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  constructor(
    private wordsService: ControlOfWordsService
  ) { }

  onKeyDown(event: Event) {
    const target: any = event.target;
    const key = target.textContent.toUpperCase();
    if(key.length === 1) return this.wordsService.addLetter(key);
    if(key == 'DELETE') return this.wordsService.removeLetter();
    if(key == 'ENTER') return this.wordsService.wordIsCorrect();
  }

  ngOnInit(): void {
  }

}
