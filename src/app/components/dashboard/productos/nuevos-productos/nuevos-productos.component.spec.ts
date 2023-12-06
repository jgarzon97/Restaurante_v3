import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosProductosComponent } from './nuevos-productos.component';

describe('NuevosProductosComponent', () => {
  let component: NuevosProductosComponent;
  let fixture: ComponentFixture<NuevosProductosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevosProductosComponent]
    });
    fixture = TestBed.createComponent(NuevosProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
