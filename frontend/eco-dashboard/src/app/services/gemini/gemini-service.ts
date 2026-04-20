import { Injectable,inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firstValueFrom} from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class GeminiService {
  private http=inject(HttpClient);
  private apiUrl='http://localhost:3000/api/generate-story';
  async fetchEcoStory(activities:string[]):Promise<string>{
    try{
      const payload={activities}
      const response=await firstValueFrom(this.http.post<{story:string}>(this.apiUrl, payload))
      return response.story;
    }
    catch (error) {
      console.error('Error fetching story from proxy:', error);
      return "Oh no! Our communication with Earth Control got interrupted. Please try again!";
    }
  }
}
