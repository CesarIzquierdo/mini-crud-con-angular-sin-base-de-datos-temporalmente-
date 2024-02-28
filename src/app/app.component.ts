import { Component, OnInit } from '@angular/core';
import firebase from 'firebase/compat/app';
import { loginService } from './login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private loginService: loginService){
  }

  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: "AIzaSyDCPxwpdd3yL2Forr-TSTWSfZx971dsfBQ",
      authDomain: "mis-clientes-b08b7.firebaseapp.com",
    });
  }

  estaLogueado(){
    return this.loginService.estaLogueado();
  }

  logout(){
    this.loginService.logoutService();
  }


}
