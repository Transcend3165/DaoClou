import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseInformationPage } from './course-information.page';

describe('CourseInformationPage', () => {
  let component: CourseInformationPage;
  let fixture: ComponentFixture<CourseInformationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseInformationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseInformationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
