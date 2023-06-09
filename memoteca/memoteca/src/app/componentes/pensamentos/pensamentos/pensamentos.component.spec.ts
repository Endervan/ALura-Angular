import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PensamentosComponent} from './pensamentos.component';

describe('PensamentosComponent', () => {
  let component: PensamentosComponent;
  let fixture: ComponentFixture<PensamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensamentosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
