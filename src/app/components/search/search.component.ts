import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  serarchedHeroes: Heroe[]:

  constructor(private activatedRoute: ActivatedRoute,
              private _heroesService: HeroesService
              ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.serarchedHeroes = this._heroesService.searchHeros(params['term']);
  }

}
