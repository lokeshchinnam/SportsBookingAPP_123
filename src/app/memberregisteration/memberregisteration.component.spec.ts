import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberregisterationComponent } from './memberregisteration.component';

describe('MemberregisterationComponent', () => {
  let component: MemberregisterationComponent;
  let fixture: ComponentFixture<MemberregisterationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberregisterationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberregisterationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
