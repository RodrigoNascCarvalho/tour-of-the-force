import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForceUserDetailComponent } from './force-user-detail.component';

describe('ForceUserDetailComponent', () => {
  let component: ForceUserDetailComponent;
  let fixture: ComponentFixture<ForceUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
