import { Injectable } from '@angular/core';
import {Auth, signInWithPopup,GoogleAuthProvider} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: Auth) {}
  currentUser !: any;
  async login(){
    const credential = await signInWithPopup (this.auth, new GoogleAuthProvider());
    console.log(credential);
    this.currentUser = await credential.user.photoURL;
  }
  async logout(){
    await this.auth.signOut();
    this.currentUser = null;
  }
}
