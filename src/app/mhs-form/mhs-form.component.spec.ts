import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MhsFormComponent } from './mhs-form.component';

describe('MhsFormComponent', () => {
  let component: MhsFormComponent;
  let fixture: ComponentFixture<MhsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MhsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MhsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
