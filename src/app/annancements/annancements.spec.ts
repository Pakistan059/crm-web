import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Annancements } from './annancements';

describe('Annancements', () => {
  let component: Annancements;
  let fixture: ComponentFixture<Annancements>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Annancements]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Annancements);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
