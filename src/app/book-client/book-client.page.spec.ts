import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookClientPage } from './book-client.page';

describe('BookClientPage', () => {
  let component: BookClientPage;
  let fixture: ComponentFixture<BookClientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookClientPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookClientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
