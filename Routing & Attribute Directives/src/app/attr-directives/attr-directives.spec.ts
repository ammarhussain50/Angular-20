import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttrDirectives } from './attr-directives';

describe('AttrDirectives', () => {
  let component: AttrDirectives;
  let fixture: ComponentFixture<AttrDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttrDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttrDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
