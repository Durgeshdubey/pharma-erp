import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonCompanyListComponent } from './common-company-list.component';

describe('CommonCompanyListComponent', () => {
  let component: CommonCompanyListComponent;
  let fixture: ComponentFixture<CommonCompanyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonCompanyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonCompanyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
