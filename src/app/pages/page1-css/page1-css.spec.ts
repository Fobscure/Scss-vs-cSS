import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Css } from './page1-css';

describe('Page1Css', () => {
  let component: Page1Css;
  let fixture: ComponentFixture<Page1Css>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page1Css],
    }).compileComponents();

    fixture = TestBed.createComponent(Page1Css);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
