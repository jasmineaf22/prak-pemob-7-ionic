import { Component } from '@angular/core';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.page.html',
})
export class JokesPage {
  joke: string = '';

  private jokes: string[] = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "Why did the scarecrow win an award? Because he was outstanding in his field!"
  ];

  constructor() {
    this.getNewJoke();
  }

  getNewJoke() {
    this.joke = this.jokes[Math.floor(Math.random() * this.jokes.length)];
  }
}
