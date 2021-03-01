import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//importamos el servicio de autenticación
import { AuthService } from 'src/app/core/service/auth/auth.service';
import * as CryptoJS from 'crypto-js';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form!: FormGroup;
  enc="";
 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService //inyectamos el servicio de autenticación
  ) {
    this.buildForm();
  }

  ngOnInit() {
  }

  register(event: Event) {
    event.preventDefault();
    if (this.form.valid) { //valida si el formulario es válido
      const value = this.form.value;
       this.enc= CryptoJS.SHA256(value.password.trim()).toString();
      console.log(this.enc);
      this.authService.createUser(value.email, value.password)
      .then(() => { //ejecutamos la promesa
        this.router.navigate(['/auth/login']); //después de crear el usuario lo dirige al login
      });
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }


}
