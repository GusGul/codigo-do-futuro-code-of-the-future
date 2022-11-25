import { formatCurrency } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('emailInput') emailInput!: ElementRef
  @ViewChild('passwordInput') passwordInput!: ElementRef

  email!:string;
  password!:string;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {
    if (!form.valid) {
      form.controls['email']?.markAsTouched();
      form.controls['password']?.markAsTouched();

      if(form.controls['email'].invalid){
        this.emailInput.nativeElement.focus();
        return;
      }
      if(form.controls['password'].invalid){
        this.passwordInput.nativeElement.focus();
      }

      return;
    }
  }
  
  exibeErro(nomeControle: string, form: any) {
    if (!form.controls[nomeControle]) {
      return false
    }

    return !form.controls[nomeControle]?.invalid && form.controls[nomeControle]?.touched;
  }
  

}
