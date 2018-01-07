import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe = {};
  index:number;

  constructor(private activatedRoute:ActivatedRoute,
              private _heroeService:HeroesService
  ) {
    this.activatedRoute.params.subscribe( params =>{
      this.index = params['id'];
    } );
    console.log(this.index);
    this.heroe = this._heroeService.getHeroe(this.index);
    console.log(this.heroe);
  }

  ngOnInit() {
  }

}
