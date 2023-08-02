import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, Platform } from '@ionic/angular';
import firebase from 'firebase/compat/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router:Router) {
    
  }

  ngOnInit():void{
    firebase.initializeApp({
      apiKey: "AIzaSyDAgQ8E6COC6D0L_DyIsiyeFK_sZMikOx8",
      authDomain: "cargadecreditoppsapp.firebaseapp.com"
    });
    this.router.navigateByUrl("splash");
  }  
}
