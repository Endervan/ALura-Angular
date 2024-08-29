import {AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnInit, signal, SimpleChanges, ViewChild} from '@angular/core';
import {FormBuilder} from "@angular/forms";




@Component({
  selector: 'app-life-cycle',
  standalone: true,
  imports: [],
  templateUrl: './life-cycle.component.html',
  styleUrl: './life-cycle.component.scss'
})
export class LifeCycleComponent implements OnChanges,OnInit,DoCheck,AfterViewInit{
  @Input() public myNumber = 0;


  // construtor ou inicializador
  constructor(private  fb:FormBuilder){
  }

  // 1 - changesdetections vem primeiro no ciclo de vida antes ngOnInit e detecta mudanças
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges',changes);
    // if (changes['myNumber'].previousValue === 2){
    //   alert('deu bom qnd chegou no 2')
    // }
  }

  // 2 - ciclo de vida
  public myText =  signal('jose iniciando ante do click');
  ngOnInit(): void {
    console.log('ngOnInit')
  }

  // executando antes e claro depois que tei alguma alteração manualmente come um click
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }


  // ViewChild -> procura elemento html com algu nome
  @ViewChild('content') public content!: ElementRef;
  // chamando apos a visualização do template e suas filhas
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit')
    console.log( this.content.nativeElement.innerHTML)
    this.content.nativeElement.innerHTML = 'texto dentro html';
    console.log( this.content.nativeElement.innerHTML);
  }

}
