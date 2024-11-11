import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VapeoComponent } from './vapeo.component';

describe('VapeoComponent', () => {
  let component: VapeoComponent;
  let fixture: ComponentFixture<VapeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VapeoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VapeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
