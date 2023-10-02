import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientesComponent } from './ingredientes.component';

describe('IngredientesComponent', () => {
  let component: IngredientesComponent;
  let fixture: ComponentFixture<IngredientesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientesComponent]
    });
    fixture = TestBed.createComponent(IngredientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
