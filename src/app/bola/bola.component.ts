import { Component } from '@angular/core';
import { MessageComponent } from '../message/message.component';

@Component({
  selector: 'app-bola',
  templateUrl: './bola.component.html',
  styleUrls: ['./bola.component.css']
})
export class BolaComponent {
  messageComponent = new MessageComponent();
  isSpinning = false;
  onBallClick(): void {
    console.log(this.isSpinning);

    if (this.isSpinning) {
      location.reload();
    } else {
      this.isSpinning = !this.isSpinning;
      this.messageComponent.showQuote();
      console.log(this.isSpinning);
    }
  }
}
