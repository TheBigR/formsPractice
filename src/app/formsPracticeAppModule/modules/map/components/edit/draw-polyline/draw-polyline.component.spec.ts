import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPolylineComponent } from './draw-polyline.component';

describe('DrawPolylineComponent', () => {
  let component: DrawPolylineComponent;
  let fixture: ComponentFixture<DrawPolylineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawPolylineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawPolylineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
