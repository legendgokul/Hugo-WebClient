import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { LoginService } from '../_service/login.service';
import { registerform } from '../_models/registerform';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //Flogs
  ToggleLogin:boolean = true;

  //using Angular reactive forms for register form
  // creating a new formGroup with empty object representing its starting state.
  registerForm: FormGroup = new FormGroup({}); 
  loginForm:FormGroup = new FormGroup({});


  //adding FormBuilder reference.
  constructor(private fb:FormBuilder , private loginService :LoginService){

  }

  ngOnInit(): void {
    this.initializeRegisterForm();
    this.initializeLoginForm();
  }



  initializeRegisterForm(){
    //declaring form definitions.
    this.registerForm = this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]],
      confirmPassword : ['',[Validators.required, Validators.minLength(8),this.checkPassword('password')]], // adding custom validation.
      street:['',[Validators.required]],
      city:['',[Validators.required]],
      country:['',[Validators.required]],
      pincode:['',[Validators.required, Validators.maxLength(6)]],
    });

    //code to recheck the validation of confirm password if initial password value is changed.
    this.registerForm.controls['password'].valueChanges.subscribe({
      next:()=>{
      this.registerForm.controls['confirmPassword'].updateValueAndValidity();
      }
    }); 

  }

  initializeLoginForm(){
    // initialize the login form.
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(8)]]
    })
  }



  //function to check if password and confirm passwords are same.
  checkPassword(matchTo:string):ValidatorFn 
  {
    return (control:AbstractControl) =>{
      return control.value === control.parent?.get(matchTo)?.value ? null : {notMatching:true}
    }
  }


  cancel(){
    //reset both register and login form here
    this.registerForm.reset();
    this.loginForm.reset();
  }


  register(){
    var formvalue = this.registerForm.value;
    const values :registerform = new  registerform(formvalue.username,formvalue.email,
              formvalue.street+" ,"+formvalue.city+" ,"+formvalue.country,formvalue.password,"Customer","","");
    console.log("Register request data",values);
    this.loginService.RegisterUser(values).subscribe({
      next: resp =>{
        console.log("response from server for register",resp);
      }
    })
  }

  login(){
    console.log("Login request data",this.loginForm.value);
    this.loginService.login(this.loginForm.value).subscribe({
      next:(resp) =>{ console.log("response from server for login",resp);}
    })

  }



}
