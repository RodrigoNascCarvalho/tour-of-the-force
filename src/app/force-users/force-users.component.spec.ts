import { async, ComponentFixture, TestBed } from '@angular/core/testing';

describe('ForceUsersComponent', () => {
  let component: ForceUsersComponent;
  let fixture: ComponentFixture<ForceUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForceUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForceUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
