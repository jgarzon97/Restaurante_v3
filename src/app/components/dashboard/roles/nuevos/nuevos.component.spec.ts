import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevosComponent } from './nuevos.component';

describe('NuevosComponent', () => {
  let component: NuevosComponent;
  let fixture: ComponentFixture<NuevosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevosComponent]
    });
    fixture = TestBed.createComponent(NuevosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
