import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardYcpComponent } from './dashboard-ycp.component';

describe('DashboardYcpComponent', () => {
  let component: DashboardYcpComponent;
  let fixture: ComponentFixture<DashboardYcpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardYcpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardYcpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
