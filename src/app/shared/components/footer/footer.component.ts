import { Component, OnInit } from '@angular/core';
import {FormControl , Validators} from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField:FormControl;
  constructor() { 
    this.emailField= new FormControl('',[
      Validators.required,
      Validators.minLength(4),
      Validators.email
    ]);
    //dato que muestra el campo/array de validaciones
    // this.emailField.valueChanges.subscribe(value=>{
    //   console.log(value);
    // }); //escucha cada cambio en el campo
  }

  ngOnInit(): void {
  }
  sendMail()
  {
    if(this.emailField.valid)
    {
      console.log(this.emailField.value); //me da el valor que tiene el texto
    }
  }

}
