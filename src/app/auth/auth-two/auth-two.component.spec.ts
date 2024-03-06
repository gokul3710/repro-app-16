import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthTwoComponent } from './auth-two.component';

describe('AuthTwoComponent', () => {
  let component: AuthTwoComponent;
  let fixture: ComponentFixture<AuthTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthTwoComponent]
    });
    fixture = TestBed.createComponent(AuthTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
