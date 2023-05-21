import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponentEntrada } from './form.component';

describe('FormComponentEntrada', () => {
  let component: FormComponentEntrada;
  let fixture: ComponentFixture<FormComponentEntrada>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponentEntrada ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormComponentEntrada);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
