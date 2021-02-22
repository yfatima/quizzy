import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user.model';

import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

import firebase from 'firebase/app';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user$: Observable<User>;
  loggedIn: boolean = false;

  constructor(
        private afAuth: AngularFireAuth,
        private afs: AngularFirestore,
        private router: Router
    ) 
        
    {     
        this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.afs.doc<any>(`users/2TFHjUguVnmUJqnDTm03`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
      )
    }
    
  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    this.loggedIn = true;
    return;
  }
  
  private updateUserData({userid, email, fullname, username} : User) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/2TFHjUguVnmUJqnDTm03`);

    const data = { 
      userid, 
      email,
      fullname, 
      username
    }; 

    return userRef.set(data, { merge: true })
  }

  async signOut() {
    await this.afAuth.signOut();
    this.loggedIn = false;
    this.router.navigate(['/home']);
  }
  
  getStatus () {
  	return this.loggedIn;
  }
  
  
}





