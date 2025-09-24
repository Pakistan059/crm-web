import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembershipApplications } from './membership-applications';

describe('MembershipApplications', () => {
  let component: MembershipApplications;
  let fixture: ComponentFixture<MembershipApplications>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MembershipApplications]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MembershipApplications);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
