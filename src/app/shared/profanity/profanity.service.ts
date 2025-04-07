import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { ChatService } from '../api/chat/chat.service';

@Injectable()
export class ProfanityService {
  private badWords$: Observable<Set<string>>;

  constructor(private chatService: ChatService) {
    this.badWords$ = this.chatService.getBadWords().pipe(
      map((badWords) => new Set(badWords.words)),
      shareReplay(1),
    );
  }

  preloadBadWords(): Observable<Set<string>> {
    return this.badWords$;
  }

  containsProfanity(message: string): Observable<boolean> {
    return this.badWords$.pipe(
      map((badWordsSet) => {
        const words = message.toLowerCase().split(/\W+/); // split on non-word chars
        return words.some(word => badWordsSet.has(word)); // Use Set's `has` method
      })
    );
  }
}
