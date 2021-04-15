import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicDialogComponent } from './clinic-dialog.component';

describe('ClinicDialogComponent', () => {
  let component: ClinicDialogComponent;
  let fixture: ComponentFixture<ClinicDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
