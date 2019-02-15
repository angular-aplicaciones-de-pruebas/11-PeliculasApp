import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../../providers/peliculas.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styles: []
})
export class BuscadorComponent implements OnInit {
  buscar:string="";

  constructor(public _ps:PeliculasService,private _activatedRoute:ActivatedRoute) {
    this._activatedRoute.params.subscribe( params =>{
      if( params['texto']){
        this.buscar = params['texto'];
        this.buscarPelicula();
      }
  });


  }

  ngOnInit() {
  }
  buscarPelicula(){
    if(this.buscar.length===0){
      return;
    }
    this._ps.buscarPelicula(this.buscar)
      .subscribe((data:any)=>{console.log(data);});

  }

}
