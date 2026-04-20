import { Component,inject } from '@angular/core';
import {ActivityService} from '../../services/activity/activity-service'
@Component({
  selector: 'app-activity-grid',
  imports: [],
  templateUrl: './activity-grid.html',
  styleUrl: './activity-grid.scss',
})
export class ActivityGrid {
  activityService = inject(ActivityService);
  
  // The list of actions kids can choose from
  availableActions = [
    { name: 'Turned off lights', icon: '💡' },
    { name: 'Recycled plastic', icon: '♻️' },
    { name: 'Planted a seed', icon: '🌱' },
    { name: 'Saved water', icon: '💧' },
    { name: 'Rode a bike', icon: '🚲' },
    { name: 'Picked up trash', icon: '🗑️' }
  ];

  logIt(name: string, icon: string) {
    this.activityService.logActivity(name, icon);
  }
}
