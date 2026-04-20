import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Question {
  text: string;
  options: string[];
  correctIndex: number;
  funFact: string;
}

@Component({
  selector: 'app-nature-puzzle',
  imports: [CommonModule],
  templateUrl: './nature-puzzle.html',
  styleUrl: './nature-puzzle.scss',
})
export class NaturePuzzle {
  questions: Question[] = [
    {
      text: "Which of the following is a renewable source of energy?",
      options: ["Coal", "Sunlight", "Natural Gas", "Oil"],
      correctIndex: 1,
      funFact: "Solar power is the most abundant energy source on Earth. High-five to the sun! ☀️"
    },
    {
      text: "How can you help save water at home?",
      options: ["Leaving the tap on while brushing teeth", "Taking long baths instead of short showers", "Turning off the tap while brushing teeth", "Watering plants during the hottest part of the day"],
      correctIndex: 2,
      funFact: "Turning off the tap while brushing your teeth can save up to 8 gallons of water a day! 💧"
    },
    {
      text: "Which of these materials is the easiest to recycle?",
      options: ["Styrofoam", "Plastic Bags", "Aluminum Cans", "Greasy Pizza Boxes"],
      correctIndex: 2,
      funFact: "Recycling one aluminum can saves enough energy to run a TV for three hours! ♻️"
    },
    {
      text: "What do trees naturally absorb from the air to help us?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
      correctIndex: 1,
      funFact: "Trees act like a giant filter, cleaning the air we breathe. A mature tree absorbs 48 pounds of CO2 a year! 🌳"
    }
  ];

  currentQuestionIndex = signal(0);
  score = signal(0);
  quizComplete = signal(false);
  selectedOption = signal<number | null>(null);
  showFeedback = signal(false);

  currentQuestion = computed(() => this.questions[this.currentQuestionIndex()]);

  selectOption(index: number) {
    if (this.showFeedback()) return; // Prevent clicking multiple times

    this.selectedOption.set(index);
    this.showFeedback.set(true);

    if (index === this.currentQuestion().correctIndex) {
      this.score.update(s => s + 10); // 10 points for a correct answer
    }
  }

  nextQuestion() {
    if (this.currentQuestionIndex() < this.questions.length - 1) {
      this.currentQuestionIndex.update(i => i + 1);
      this.selectedOption.set(null);
      this.showFeedback.set(false);
    } else {
      this.quizComplete.set(true);
    }
  }

  resetPuzzle() {
    this.currentQuestionIndex.set(0);
    this.score.set(0);
    this.selectedOption.set(null);
    this.showFeedback.set(false);
    this.quizComplete.set(false);
  }
}
