import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VardiRightPaneComponent } from './vardi-right-pane.component';

describe('VardiRightPaneComponent', () => {
  let component: VardiRightPaneComponent;
  let fixture: ComponentFixture<VardiRightPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VardiRightPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VardiRightPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
