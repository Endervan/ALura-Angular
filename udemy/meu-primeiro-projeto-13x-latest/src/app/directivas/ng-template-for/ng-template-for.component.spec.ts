import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTemplateForComponent } from './ng-template-for.component';

describe('NgTemplateForComponent', () => {
  let component: NgTemplateForComponent;
  let fixture: ComponentFixture<NgTemplateForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgTemplateForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgTemplateForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
