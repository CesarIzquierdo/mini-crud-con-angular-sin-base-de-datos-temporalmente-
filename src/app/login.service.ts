import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { CookieService } from "ngx-cookie-service";


@Injectable()
export class loginService{
    constructor(private router:Router, private cookies:CookieService){}
    //token : string;

    login(email:string, password:string){
        firebase.auth().signInWithEmailAndPassword(email, password).then(
            response=>{
                firebase.auth().currentUser?.getIdToken().then(
                    token=>{
                        //this.token = token;//se crea el token
                        this.cookies.set("token", token);//guarda el token en la cookie
                        this.router.navigate(['/']);
                    }
                )
            }
        );
    }

    getIdToken(){
        //return this.token;

        return this.cookies.get("token");//guarda el metodo que esta en el set como 'token'
    }

    estaLogueado(){
        //return this.token;
        console.log("Cookie de token actualizada:", this.cookies.get("token"));

        return this.cookies.get("token");//guarda el metodo que esta en el set como 'token'
    }

    logoutService(){
        firebase.auth().signOut().then(() => {
            this.cookies.delete("token");
            this.router.navigate(['/login']);
            window.location.reload();
        });
    }
}