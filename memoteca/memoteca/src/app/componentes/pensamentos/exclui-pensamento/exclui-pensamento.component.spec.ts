import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ExcluiPensamentoComponent} from './exclui-pensamento.component';

describe('ExcluiPensamentoComponent', () => {
  let component: ExcluiPensamentoComponent;
  let fixture: ComponentFixture<ExcluiPensamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExcluiPensamentoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExcluiPensamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
