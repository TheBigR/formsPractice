import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawPolygonComponent } from './draw-polygon.component';

describe('DrawPolygonComponent', () => {
  let component: DrawPolygonComponent;
  let fixture: ComponentFixture<DrawPolygonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawPolygonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawPolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
