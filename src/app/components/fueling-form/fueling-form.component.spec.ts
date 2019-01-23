import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FuelingFormComponent } from './fueling-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import {By} from '@angular/platform-browser';

describe('FuelingFormComponent', () => {
  let component: FuelingFormComponent;
  let fixture: ComponentFixture<FuelingFormComponent>;

  beforeEach(async (() => {
    TestBed.configureTestingModule({
      declarations: [FuelingFormComponent],
      imports: [ReactiveFormsModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelingFormComponent);
    component = fixture.componentInstance;
    component.mockMe();
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('ellipse length should be 33', () => {
    const inp = fixture.debugElement.query(By.css('input[formControlName=\'ellipse_length\']'));
    const el = inp.nativeElement;
    fixture.detectChanges();
    expect(el.value).toBe('33');
  });



});
