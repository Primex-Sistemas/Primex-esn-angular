import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErroForbiddenComponent } from './erro-forbidden.component';

describe('ErroForbiddenComponent', () => {
  let component: ErroForbiddenComponent;
  let fixture: ComponentFixture<ErroForbiddenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErroForbiddenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErroForbiddenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
