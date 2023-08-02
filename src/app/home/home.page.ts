import { Component } from '@angular/core'
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  tema='animales';
  rutaDeLaImagenPais="../../assets/españita.png";
  rutaDeLaImagenTema="./../assets/zorro.png";
  idioma='espanol';
  constructor(private loginServe:LoginService) {}

  cambiarPaisElegido(ruta:string, idiomaSeleccionado:string){
    this.rutaDeLaImagenPais=ruta;
    this.idioma=idiomaSeleccionado;
  }

  cambiarTemaElegido(ruta:string, temaElegido:string){
    this.rutaDeLaImagenTema=ruta;
    this.tema=temaElegido;
  }

  generarSonido(objeto:string){
    const ruta =`./../assets/audios/${this.idioma}/${objeto}`
    const audio= new Audio(ruta);
    audio.play();
  }

  cerrarSesion(){
    this.loginServe.desloguear();
  }
 
}
