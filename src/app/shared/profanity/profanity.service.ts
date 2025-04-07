import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { BadWordsRx } from '../api/chat/models/bad-words-rx.model';
import { ChatService } from '../api/chat/chat.service';

@Injectable()
export class ProfanityService {
  private badWords$: Observable<BadWordsRx>;

  constructor(private chatService: ChatService) {
    this.badWords$ = this.chatService.getBadWords().pipe(shareReplay(1));
  }

  preloadBadWords(): Observable<BadWordsRx> {
    return this.badWords$;
  }

  containsProfanity(message: string): Observable<boolean> {
    return this.badWords$.pipe(
      map((badWords) => {
        const words = message.toLowerCase().split(/\W+/); // split on non-word chars
        return words.some(word => badWords.words.includes(word));
      })
    );
  }
}
