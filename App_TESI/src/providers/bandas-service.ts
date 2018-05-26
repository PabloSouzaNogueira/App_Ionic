import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class BandasService {

bandas =[
{ 
  codigo: 1,
  imagem: 'http://i67.tinypic.com/2js5sk.jpg', 
  titulo: 'The Black Keys', 
  descricao: 'The Black Keys é uma dupla estadunidense de Indie Rock formada pelo vocalista/guitarrista Dan Auerbach e pelo baterista/produtor Patrick Carney no ano de 2001 em Akron, Ohio.',
  musica: 'https://s3-us-west-2.amazonaws.com/storagemp3/audio1.mp3',
  likes: 0,
  deslikes: 0,

},

{ 
  codigo: 2,
  imagem: 'http://i68.tinypic.com/10z5kdk.jpg',
  titulo: 'The Tallest Man on Earth', 
  descricao: 'Kristian Matsson (nascido em 30 de abril de 1983) é um cantor e compositor de Dalarna , Suécia , que interpreta sob o nome artístico de The Tallest Man on Earth.', 
  musica: 'https://s3-us-west-2.amazonaws.com/storagemp3/audio2.mp3',
  likes: 0,
  deslikes: 0,
},

{ 
  codigo: 3,
  imagem: 'http://i64.tinypic.com/rku77n.jpg', 
  titulo: 'Left Lane Cruiser', 
  descricao: 'Left Lane Cruiser é uma banda de blues-rock dos Estados Unidos originária de Fort Wayne, Indiana . A banda disse que sua influência principal vem dos músicos de blues norte do Mississippi Hill country.',
  musica: 'https://s3-us-west-2.amazonaws.com/storagemp3/audio3.mp3',
  likes: 0,
  deslikes: 0,
},

{ 
  codigo: 4,
  imagem: 'http://i67.tinypic.com/18emm9.jpg', 
  titulo: 'Franz Ferdinand', 
  descricao: 'Franz Ferdinand é uma banda de rock escocês , formada em 2002 e com sede em Glasgow. A banda tem sido conhecida por ser uma das bandas de revival pós-punk mais populares, conquistando vários top 20 hits no Reino Unido e vendendo mais de 3 milhões de álbuns em todo o mundo, a partir do final de 2009.',
  musica: 'https://s3-us-west-2.amazonaws.com/storagemp3/audio4.mp3',
  likes: 0,
  deslikes: 0,
},

{ 
  codigo: 5,
  imagem: 'http://i66.tinypic.com/wmlf0h.jpg', 
  titulo: 'INXS', 
  descricao: 'INXS (pronunciado In Excess) foi uma banda de rock australiana formada em 1977. O grupo começou como The Farriss Brothers mas mudou de nome depois do lançamento do álbum INXS em 1980.',
  musica: 'https://s3-us-west-2.amazonaws.com/storagemp3/audio5.mp3',
  likes: 0,
  deslikes: 0,
},

{ 
  codigo: 6,
  imagem: 'http://i63.tinypic.com/20ts47n.jpg', 
  titulo: 'Gemini Club', 
  descricao: 'Gemini Club é um trio americano (Chicago) formado por Tom Gavin, Gordon Bramli e Daniel Brunelle.',
  musica: 'https://s3-us-west-2.amazonaws.com/storagemp3/audio6.mp3',
  likes: 0,
  deslikes: 0,
},

{ 
  codigo: 7,
  imagem: 'http://i66.tinypic.com/nboxvc.jpg', 
  titulo: 'Jake Bugg', 
  descricao: 'Jake Edwin Kennedy (Nottingham, Inglaterra, 28 de fevereiro de 1994), mais conhecido pelo nome artístico Jake Bugg, é um cantor e compositor inglês.',
  musica: 'https://s3-us-west-2.amazonaws.com/storagemp3/audio7.mp3',
  likes: 0,
  deslikes: 0,
}


]

  constructor(public http: Http) {
    console.log('Hello BandasService Provider');
  }

getMusica(codigo:number):string{
    return this.bandas[codigo].musica;
  }

  getBandas(){
    return this.bandas;
  }

  getBandaNome(codigo:number):string{
    return this.bandas[codigo].titulo;
  }

  setLike(codigo:number){
    for(let I=0; I< this.bandas.length; I++){
      if(this.bandas[I].codigo == codigo)
        this.bandas[I].likes += 1;
    }
  }

  setDeslike(codigo:number){
    for(let I=0; I< this.bandas.length; I++){
      if(this.bandas[I].codigo == codigo)
        this.bandas[I].deslikes += 1;
    }
   }

}
