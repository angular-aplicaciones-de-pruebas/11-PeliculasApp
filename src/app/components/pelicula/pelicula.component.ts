import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../providers/peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {
  pelicula:any;
  regresar:string="";
  busqueda:string="";

  constructor(public _ps:PeliculasService,private _activatedRoute:ActivatedRoute) {

    this._activatedRoute.params.subscribe( params =>{
      this.regresar = params['pag']
      if(params['busqueda']){
        this.busqueda = params['busqueda'];
      }



      this._ps.getPelicula(params['id'])


      .subscribe((data:any)=>{
        console.log(data);
        this.pelicula =data
      });
    });


  }

  ngOnInit() {
  }

}
