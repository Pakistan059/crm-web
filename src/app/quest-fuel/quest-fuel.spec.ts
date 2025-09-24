import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestFuel } from './quest-fuel';

describe('QuestFuel', () => {
  let component: QuestFuel;
  let fixture: ComponentFixture<QuestFuel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestFuel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestFuel);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
