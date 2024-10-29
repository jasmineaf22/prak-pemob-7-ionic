import { Component } from '@angular/core';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.page.html',
})
export class QuotesPage {
  quote: string = '';

  private quotes: string[] = [
    "Believe you can and you're halfway there.",
    "Your limitation—it’s only your imagination.",
    "Push yourself, because no one else is going to do it for you.",
    "Success doesn’t just find you. You have to go out and get it."
  ];

  constructor() {
    this.getNewQuote();
  }

  getNewQuote() {
    this.quote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }
}
