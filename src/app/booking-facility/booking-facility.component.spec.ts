import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingFacilityComponent } from './booking-facility.component';

describe('BookingFacilityComponent', () => {
  let component: BookingFacilityComponent;
  let fixture: ComponentFixture<BookingFacilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingFacilityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingFacilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
