import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Conditionalflow } from './conditionalflow';

describe('Conditionalflow', () => {
  let component: Conditionalflow;
  let fixture: ComponentFixture<Conditionalflow>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Conditionalflow]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Conditionalflow);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
