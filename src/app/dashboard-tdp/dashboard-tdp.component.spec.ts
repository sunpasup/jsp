import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardTdpComponent } from './dashboard-tdp.component';

describe('DashboardTdpComponent', () => {
  let component: DashboardTdpComponent;
  let fixture: ComponentFixture<DashboardTdpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardTdpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardTdpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
