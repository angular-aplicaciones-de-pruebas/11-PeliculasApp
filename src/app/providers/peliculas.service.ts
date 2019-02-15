import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  private apikey:string = '9aafc262eb8a481cc446908dced49f83';
  private urlMoviedb:string = 'https://api.themoviedb.org/3';
  peliculas:any[]=[];

  constructor(private http:HttpClient) { }

  getCartelera(){
    let desde =new Date();
    let hasta = new Date();
    hasta.setDate(hasta.getDate()+7);
    let sDesde =`${desde.getFullYear()}-${desde.getMonth()+1}-${desde.getDate()}`;
    let sHasta =`${hasta.getFullYear()}-${hasta.getMonth()+1}-${hasta.getDate()}`;
    console.log(sHasta);

    const url =`${this.urlMoviedb}/discover/movie?primary_release_date.gte=${sDesde}&primary_release_date.lte${sHasta}&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url,'')
              .pipe(map((res:Response)=>{return res}));
  }
   getKids(){
       let url =`${this.urlMoviedb}/discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
       return this.http.jsonp(url,'')
                 .pipe(map((res:Response)=>{return res}));
   }

  getPopulares(){
    let url =`${this.urlMoviedb}/discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url,'')
              .pipe(map((res:Response)=>{return res}));
  }
  buscarPelicula( texto:string ){
    let url = `${ this.urlMoviedb }/search/movie?query=${ texto }&sort_by=popularity.desc&api_key=${ this.apikey }&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url,'')
              .pipe(map((res:any)=>{
                this.peliculas = res.results;
                return res
              }));
  }sss
  getPelicula(id:string){
    let url =`${this.urlMoviedb}/movie/${id}?api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;
    return this.http.jsonp(url,'')
              .pipe(map((res:Response)=>{return res}));
  }

}
