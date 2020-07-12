import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppbasComponent } from './appbas.component';

describe('AppbasComponent', () => {
  let component: AppbasComponent;
  let fixture: ComponentFixture<AppbasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppbasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppbasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});