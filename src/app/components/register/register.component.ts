import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {sha512} from 'js-sha512';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buidlForm();
  }

  public buidlForm(){
    this.formGroup = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

  public registrarUsuario(){
    const data = {
      ...this.formGroup.value,
      constrasena: sha512(this.formGroup.value.contrasena)
    }
    console.log(this.formGroup.value)
  }
}
