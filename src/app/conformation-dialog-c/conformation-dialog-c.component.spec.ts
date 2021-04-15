import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConformationDialogCComponent } from './conformation-dialog-c.component';

describe('ConformationDialogCComponent', () => {
  let component: ConformationDialogCComponent;
  let fixture: ComponentFixture<ConformationDialogCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConformationDialogCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConformationDialogCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
