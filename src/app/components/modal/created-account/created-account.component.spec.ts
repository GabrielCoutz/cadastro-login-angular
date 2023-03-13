import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatedAccountComponent } from './created-account.component';

describe('CreatedAccountComponent', () => {
  let component: CreatedAccountComponent;
  let fixture: ComponentFixture<CreatedAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatedAccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatedAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
