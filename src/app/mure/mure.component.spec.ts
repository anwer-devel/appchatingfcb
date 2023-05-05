import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MureComponent } from './mure.component';

describe('MureComponent', () => {
  let component: MureComponent;
  let fixture: ComponentFixture<MureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
