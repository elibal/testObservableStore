import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VardiLeftPaneComponent } from './vardi-left-pane.component';

describe('VardiLeftPaneComponent', () => {
  let component: VardiLeftPaneComponent;
  let fixture: ComponentFixture<VardiLeftPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VardiLeftPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VardiLeftPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
