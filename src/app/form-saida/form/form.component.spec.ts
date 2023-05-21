import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSaidaComponent } from './form.component';

describe('FormSaidaComponent', () => {
  let component: FormSaidaComponent;
  let fixture: ComponentFixture<FormSaidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormSaidaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormSaidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
