import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformationDiadlogComponent } from './conformation-diadlog.component';

describe('ConformationDiadlogComponent', () => {
  let component: ConformationDiadlogComponent;
  let fixture: ComponentFixture<ConformationDiadlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConformationDiadlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformationDiadlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
