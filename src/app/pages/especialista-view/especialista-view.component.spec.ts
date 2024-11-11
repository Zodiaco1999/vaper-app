import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialistaViewComponent } from './especialista-view.component';

describe('EspecialistaViewComponent', () => {
  let component: EspecialistaViewComponent;
  let fixture: ComponentFixture<EspecialistaViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecialistaViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspecialistaViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
