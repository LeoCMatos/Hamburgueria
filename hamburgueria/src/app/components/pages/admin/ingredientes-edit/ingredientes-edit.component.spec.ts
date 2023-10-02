import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesEditComponent } from './ingredientes-edit.component';

describe('IngredientesEditComponent', () => {
  let component: IngredientesEditComponent;
  let fixture: ComponentFixture<IngredientesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientesEditComponent]
    });
    fixture = TestBed.createComponent(IngredientesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
