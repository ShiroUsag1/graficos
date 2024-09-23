import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbaFinanceiroGraficosComponent } from './aba-financeiro-graficos.component';

describe('AbaFinanceiroGraficosComponent', () => {
  let component: AbaFinanceiroGraficosComponent;
  let fixture: ComponentFixture<AbaFinanceiroGraficosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbaFinanceiroGraficosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AbaFinanceiroGraficosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
