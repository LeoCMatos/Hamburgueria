import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHeaderComponent } from './edit-header.component';

describe('EditHeaderComponent', () => {
  let component: EditHeaderComponent;
  let fixture: ComponentFixture<EditHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditHeaderComponent]
    });
    fixture = TestBed.createComponent(EditHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
