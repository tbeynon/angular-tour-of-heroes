import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'; 
import { HEROES } from '../mock-heroes'
import { HeroService } from '../hero.service'
import { MessagesService } from '../messages.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];  
  selectedHero: Hero;
  constructor(private HeroService: HeroService, private messagesService:MessagesService) { }



  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero:Hero):void{
    this.selectedHero = hero;
    this.messagesService.add(`HeroesComponent: Selected hero id=${hero.id}`)

    
  }

  getHeroes(): void{
    this.HeroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

}
