import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCountryListComponent } from './common-country-list.component';

describe('CommonCountryListComponent', () => {
  let component: CommonCountryListComponent;
  let fixture: ComponentFixture<CommonCountryListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCountryListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCountryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
