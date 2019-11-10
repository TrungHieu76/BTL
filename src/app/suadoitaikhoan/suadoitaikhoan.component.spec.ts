import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuadoitaikhoanComponent } from './suadoitaikhoan.component';

describe('SuadoitaikhoanComponent', () => {
  let component: SuadoitaikhoanComponent;
  let fixture: ComponentFixture<SuadoitaikhoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuadoitaikhoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuadoitaikhoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
