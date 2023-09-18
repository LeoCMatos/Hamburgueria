import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCardapioComponent } from './edit-cardapio.component';

describe('EditCardapioComponent', () => {
  let component: EditCardapioComponent;
  let fixture: ComponentFixture<EditCardapioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditCardapioComponent]
    });
    fixture = TestBed.createComponent(EditCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
