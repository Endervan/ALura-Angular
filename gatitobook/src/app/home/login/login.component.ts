import {Component, OnInit} from '@angular/core';
import {AutenticacaoService} from "../../autenticacao/autenticacao.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario = '';
  senha = '';

  constructor(private authService: AutenticacaoService, private router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.authService.autentica(this.usuario, this.senha).subscribe(() => {
      console.log('AUTENTICOU-SE')
      this.router.navigate(['animais']);
    }, error => {
      alert("Usuario ou senha Invalida")
      console.error(error)
    });
  }
}
