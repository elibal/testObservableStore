import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VardiAddRateComponent } from './vardi-add-rate.component';

describe('VardiAddRateComponent', () => {
  let component: VardiAddRateComponent;
  let fixture: ComponentFixture<VardiAddRateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VardiAddRateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VardiAddRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
