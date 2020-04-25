import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VardiRateListComponent } from './vardi-rate-list.component';

describe('VardiRateListComponent', () => {
  let component: VardiRateListComponent;
  let fixture: ComponentFixture<VardiRateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VardiRateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VardiRateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
