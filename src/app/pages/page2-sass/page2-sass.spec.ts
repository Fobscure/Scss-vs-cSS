import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page2Sass } from './page2-sass';

describe('Page2Sass', () => {
  let component: Page2Sass;
  let fixture: ComponentFixture<Page2Sass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page2Sass],
    }).compileComponents();

    fixture = TestBed.createComponent(Page2Sass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
