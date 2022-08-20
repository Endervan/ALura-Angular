import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

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

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.formularioAnimal = this.fb.group({
      file: [null, Validators.required]
    });
  }

  upload() {

  }

  gravaArquivo(arquivo: EventTarget) {

  }
}
