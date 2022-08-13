import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DetalhesAnimalComponent} from './detalhes-animal.component';

describe('DetalhesAnimalComponent', () => {
  let component: DetalhesAnimalComponent;
  let fixture: ComponentFixture<DetalhesAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesAnimalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
