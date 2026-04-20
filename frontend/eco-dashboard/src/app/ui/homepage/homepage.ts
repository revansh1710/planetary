import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NaturePuzzle } from '../nature-puzzle/nature-puzzle';

@Component({
  selector: 'app-homepage',
  imports: [CommonModule, NaturePuzzle],
  templateUrl: './homepage.html',
  styleUrl: './homepage.scss',
})
export class Homepage {
  isOpen = false;
  status: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  error = '';

  backgroundVideo = 'Hero.mp4';
  about = 'about.jpg';

  currentYear = new Date().getFullYear();

  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  closeMenu() {
    this.isOpen = false;
  }

  handleSubmit() {
    this.status = 'loading';

    setTimeout(() => {
      this.status = 'success';
    }, 1500);
  }
}
