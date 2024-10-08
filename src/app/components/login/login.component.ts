import { Component, signal } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputTextModule, PasswordModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  logoImg = signal<string>("../../../assets/imgs/logo.png");

  form = new FormGroup({
    email: new FormControl(undefined, {
      validators: [
        Validators.email,
        Validators.required
      ]
    }),
    password: new FormControl(undefined, {
      validators: [
        Validators.required,
        Validators.minLength(6)
      ]
    }),
  });

  onForgetPassword() {
  }

  onSubmit() {
    const enteredEmail = this.form.value.email;
    const enteredPassword = this.form.value.password;
  }

}
