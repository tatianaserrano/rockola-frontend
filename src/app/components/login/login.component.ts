import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.buidlForm();
  }

  public buidlForm(){
    this.formGroup = this.formBuilder.group({
      correo: ['', Validators.required],
      contrasena: ['', Validators.required],
    });
  }

}
