import { Component } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  adviceMessage: string | null = null;

  showQuote(): void {
    fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => data.slip.advice)
      .then((advice) => {
        this.adviceMessage = advice;
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
        // Handle or display the error in your component if needed
      });
  }
}