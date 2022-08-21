import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AnimaisService} from "../animais.service";
import {Router} from "@angular/router";
import {finalize} from "rxjs/operators";
import {HttpEvent, HttpEventType} from "@angular/common/http";

@Component({
  selector: 'app-novo-animal',
  templateUrl: './novo-animal.component.html',
  styleUrls: ['./novo-animal.component.css']
})
export class NovoAnimalComponent implements OnInit {

  formularioAnimal!: FormGroup;
  file!: File;
  preview!: string;
  percentualConcluido = 0;

  constructor(private fb: FormBuilder,
              private animaisService: AnimaisService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.formularioAnimal = this.fb.group({
      file: ['', Validators.required],
      description: ['', Validators.maxLength(300)],
      allowComments: [true],
    });
  }

  upload = () => {
    const allowComments = this.formularioAnimal.get('allowComments')?.value ?? false;
    const description = this.formularioAnimal.get('description')?.value ?? '';
    console.log(allowComments, description, this.file);
    this.animaisService.upload(description, allowComments, this.file)
      .pipe(
        finalize(() => this.router.navigate(['animais'])) // monitora e faz acao dps q a  requisicao termina
      ).subscribe(
      (event: HttpEvent<any>) => {
        if (event.type === HttpEventType.UploadProgress) {
          const total = event.total ?? 1;
          this.percentualConcluido = Math.round(100 * (event.loaded / total)); // calcula progess pro usuario
        }
      }, error => console.log(error));

  }

  // [file] subistitue essa arquivo?.file[0].
  gravaArquivo(arquivo: any): void {
    const [file] = arquivo?.files;
    this.file = file;
    const reader = new FileReader();
    reader.onload = (event: any) => (this.preview = event.target.result);
    reader.readAsDataURL(file);
  }
}
