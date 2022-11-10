import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Comentarios} from './comentarios';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ComentariosService} from './comentarios.service';
import {switchMap, tap} from 'rxjs/operators';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {
  @Input() id!: number;
  comentarios$!: Observable<Comentarios>;
  comentarioForm!: FormGroup;


  constructor(private comentariosService: ComentariosService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.comentarios$ = this.comentariosService.buscaComentario(this.id);
    console.log('dsadadsadaasdadasd', this.comentarios$);
    this.comentarioForm = this.fb.group({
      comentario: ['', Validators.maxLength(300)]
    });
  }

  gravar(): void {
    const comentario = this.comentarioForm.get('comentario')?.value ?? '';
    // usando switchMap pra buscar novos comentarios dps q incluir
    this.comentarios$ = this.comentariosService.incluirComentario(this.id, comentario)
      .pipe(
        switchMap(() => this.comentariosService.buscaComentario(this.id)),
        tap(() => { // tap funcao independence do fluxo observable
          this.comentarioForm.reset(); // resetando comentario depois q incluir
          alert('Comentario Salvo');
        })
      );
  }
}
