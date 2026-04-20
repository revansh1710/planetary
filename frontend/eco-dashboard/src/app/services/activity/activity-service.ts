import { Injectable,signal,computed } from '@angular/core';


export interface EcoActivity{
  id:string,
  name:string,
  icon:string,
  loggedAt:Date
}
@Injectable({
  providedIn:'root'
})
export class ActivityService {
   loggedActivities = signal<EcoActivity[]>([]);
  readonly activityNames = computed(() => 
    this.loggedActivities().map(activity => activity.name)
  );

  readonly canGenerateStory = computed(() => 
    this.loggedActivities().length >= 3
  );

  logActivity(name: string, icon: string) {
    const newActivity: EcoActivity = {
      id: crypto.randomUUID(),
      name,
      icon,
      loggedAt: new Date()
    };

    this.loggedActivities.update(activities => [...activities, newActivity]);
  }

  resetActivities() {
    this.loggedActivities.set([]);
  }
}
