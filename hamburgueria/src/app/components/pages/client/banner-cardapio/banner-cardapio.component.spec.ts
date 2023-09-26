import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerCardapioComponent } from './banner-cardapio.component';

describe('BannerCardapioComponent', () => {
  let component: BannerCardapioComponent;
  let fixture: ComponentFixture<BannerCardapioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerCardapioComponent]
    });
    fixture = TestBed.createComponent(BannerCardapioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
