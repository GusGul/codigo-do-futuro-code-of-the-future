import { Router } from '@angular/router';
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
  mensagem:Boolean = false

  constructor(
    private router:Router
  ) { }

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
    } else {
      if(this.email === "gustavo@alunos.com" && this.password === "123456"){
        localStorage.setItem("logado", "true")
        this.router.navigateByUrl("/product-list");
      } else {
        this.mensagem = true;
        return;
      }
    }
  }  

}
