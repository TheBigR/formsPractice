import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VActionComponent } from './v-action.component';

describe('VActionComponent', () => {
  let component: VActionComponent;
  let fixture: ComponentFixture<VActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
