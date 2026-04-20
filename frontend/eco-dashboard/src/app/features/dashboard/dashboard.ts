import { Component,inject,signal } from '@angular/core';
import {ActivityService} from '../../services/activity/activity-service';
import { CommonModule } from '@angular/common';
import {ActivityGrid} from '../../ui/activity-grid/activity-grid'
import {GeminiService} from '../../services/gemini/gemini-service';
@Component({
  selector: 'app-dashboard',
  imports: [CommonModule,ActivityGrid],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  activityService = inject(ActivityService);
  geminiService = inject(GeminiService);
  
  isGenerating = signal(false);
  generatedStory = signal('');

  async generateAdventure() {
    this.isGenerating.set(true);
    const activities = this.activityService.activityNames(); 

    const story = await this.geminiService.fetchEcoStory(activities);
    
    this.generatedStory.set(story);
    this.isGenerating.set(false);
  }

  reset() {
    this.generatedStory.set('');
    this.activityService.resetActivities();
  }
}
