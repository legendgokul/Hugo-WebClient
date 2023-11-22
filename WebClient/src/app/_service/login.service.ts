import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { BehaviorSubject, map } from 'rxjs';
import { registerform } from '../_models/registerform';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public apiURL :string = "https://hugo-e-commerce.onrender.com/";

  private currentUserValue = new BehaviorSubject<User|null>(null);
  currentUser$ = this.currentUserValue.asObservable(); 

  constructor(private http:HttpClient) { }

  login(model : any)
  {
    return this.http.post<User>(this.apiURL +  "user/verifyUser",model)
      .pipe(map((resp:User)=>{
        if(resp){
          this.setCurrentUser(resp);
        }
      })
    );
  }

  RegisterUser(model : registerform)
  {
    return this.http.post<User>(this.apiURL +  "user/signupUser",model)
      .pipe(map((resp:User)=>{
        if(resp){
          this.setCurrentUser(resp);
        }
      })
    );
  }



  setCurrentUser(user:User){
    localStorage.setItem('user',JSON.stringify(user));
    this.currentUserValue.next(user);
  }

}
