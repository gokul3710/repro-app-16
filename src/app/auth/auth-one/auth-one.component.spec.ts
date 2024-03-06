import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthOneComponent } from './auth-one.component';

describe('AuthOneComponent', () => {
  let component: AuthOneComponent;
  let fixture: ComponentFixture<AuthOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthOneComponent]
    });
    fixture = TestBed.createComponent(AuthOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
