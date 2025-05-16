import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CityStockComponent } from './city-stock.component';

describe('CityStockComponent', () => {
  let component: CityStockComponent;
  let fixture: ComponentFixture<CityStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CityStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CityStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
