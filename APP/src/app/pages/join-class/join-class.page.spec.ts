import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinClassPage } from './join-class.page';

describe('JoinClassPage', () => {
  let component: JoinClassPage;
  let fixture: ComponentFixture<JoinClassPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JoinClassPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinClassPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
