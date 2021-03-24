import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import {Observable, of} from 'rxjs';
import {MessagesService} from './messages.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private MessagesService:MessagesService) { }

  getHeroes(): Observable<Hero[]>{
    const heroes = of(HEROES)
    this.MessagesService.add('HeroeService: fetched heroes')
    return heroes;
  }

}
