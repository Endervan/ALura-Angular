import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "../../autenticacao/usuario/usuario.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  user$ = this.usuarioService.retornaUsuario();

  constructor( private  usuarioService:UsuarioService,private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.usuarioService.logout();
    this.router.navigate(['/home'])
  }

}
