import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page3Scss } from './page3-scss';

describe('Page3Scss', () => {
  let component: Page3Scss;
  let fixture: ComponentFixture<Page3Scss>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Page3Scss],
    }).compileComponents();

    fixture = TestBed.createComponent(Page3Scss);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
