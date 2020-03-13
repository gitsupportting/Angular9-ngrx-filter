import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnoseSideFilterPanelComponent } from './side-filter-panel.component';

describe('DiagnoseSideFilterPanelComponent', () => {
  let component: DiagnoseSideFilterPanelComponent;
  let fixture: ComponentFixture<DiagnoseSideFilterPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnoseSideFilterPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnoseSideFilterPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
