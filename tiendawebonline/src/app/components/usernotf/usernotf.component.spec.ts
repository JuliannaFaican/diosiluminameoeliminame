import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsernotfComponent } from './usernotf.component';

describe('UsernotfComponent', () => {
  let component: UsernotfComponent;
  let fixture: ComponentFixture<UsernotfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsernotfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsernotfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
