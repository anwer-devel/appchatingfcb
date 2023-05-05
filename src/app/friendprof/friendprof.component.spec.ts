import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendprofComponent } from './friendprof.component';

describe('FriendprofComponent', () => {
  let component: FriendprofComponent;
  let fixture: ComponentFixture<FriendprofComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendprofComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendprofComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
