import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  cards = [
    {
      title: 'Rei de Copas',
      description: 'O rei de copas é uma carta de baralho que representa o rei de copas.',
      cardBack: '',
      cardFront: {
        title: '',
        description: ''
      }
    },
    {
      title: 'Rainha de Copas',
      description: 'A rainha de copas é uma carta de baralho que representa a rainha de copas.',
      cardBack: '',
      cardFront: {
        title: '',
        description: ''
      }
    },
    {
      title: 'Valete de Copas',
      description: 'O valete de copas é uma carta de baralho que representa o valete de copas.',
      cardBack: '',
      cardFront: {
        title: '',
        description: ''
      }
    }
  ];

  selectedCard: any = null;

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < this.cards.length; index++) {
      this.cards[index].cardBack = 'assets/images/back-of-card.png';
      this.cards[index].cardFront = {
        title: this.cards[index].title,
        description: this.cards[index].description
      };
    }
  }

  previous() {
    this.selectedCard = this.cards[this.selectedCard?.index - 1] || null;
  }

  next() {
    this.selectedCard = this.cards[this.selectedCard?.index + 1] || null;
  }

  get selectedCardText() {
    return this.selectedCard?.cardFront.title;
  }
}
