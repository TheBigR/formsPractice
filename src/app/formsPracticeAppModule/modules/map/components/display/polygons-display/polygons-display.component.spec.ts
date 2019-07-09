import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonsDisplayComponent } from './polygons-display.component';

describe('PolygonsDisplayComponent', () => {
  let component: PolygonsDisplayComponent;
  let fixture: ComponentFixture<PolygonsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolygonsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolygonsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
