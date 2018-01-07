import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:any[] = []; 

  constructor(private _heroeService:HeroesService ) { }

  ngOnInit() {
    this.heroes = this._heroeService.getHeroes();
  }

}
