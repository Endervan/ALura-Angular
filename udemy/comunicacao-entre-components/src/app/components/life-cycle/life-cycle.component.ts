import {AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnInit, signal, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnChanges, OnInit, DoCheck, AfterViewInit, AfterContentInit,AfterContentChecked,AfterViewChecked {
  @Input() public myNumber = 0;
  // ViewChild -> procura elemento html com algu nome
  @ViewChild('content') public content!: ElementRef;

  // pega valotes dentro do ng-content que esta logalizado dentro app-life-cycle
  @ContentChild('text') public text!: ElementRef;


  // construtor ou inicializador
  constructor(private fb: FormBuilder) {
  }

  // 1 - changesdetections vem primeiro no ciclo de vida antes ngOnInit e detecta mudanças
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
    // if (changes['myNumber'].previousValue === 2){
    //   alert('deu bom qnd chegou no 2')
    // }
  }

  // 2 - ciclo de vida
  public myText = signal('jose iniciando ante do click');

  ngOnInit(): void {
    console.log('ngOnInit')
  }

  // executando antes e claro depois que tei alguma alteração manualmente come um click
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log(this.text.nativeElement.innerText);
  }


  // chamando apos a visualização do template e a suas filhas
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    console.log(this.content.nativeElement.innerText);
    console.log(this.text.nativeElement.innerText);
  }

  ngAfterContentChecked(): void { // aguarda content(somente algum conteudo)  para pode ser carregamento
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void { // aguarda view(tudo) ser carregada para poder ser carreegado
    console.log('ngAfterViewChecked')
  }


}
