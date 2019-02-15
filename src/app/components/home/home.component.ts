import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {
  cartelera:any;
  populares:any;
  kids:any;

  constructor(private _ps:PeliculasService) {

    this._ps.getCartelera()
        .subscribe((data:any)=>{this.cartelera = data.results;});
    this._ps.getPopulares()
        .subscribe((data:any)=>{this.populares = data.results;});
    this._ps.getKids()
        .subscribe((data:any)=>{this.kids = data.results;});
   }

  ngOnInit() {
  }

}
