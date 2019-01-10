import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-fueling-form',
  templateUrl: './fueling-form.component.html',
  styleUrls: ['./fueling-form.component.scss']
})
export class FuelingFormComponent implements OnInit {

  $classificationOptions = ['class1', 'class2', 'class3'];

  $activityOptions = ['Destroyed', 'Untouched', 'Partially destroyed'];

  $certaintyOptions = [{level: 'Low'}, {level: 'Medium'}, {level: 'High'}];
  cosher;


  fuelingForm = this.fb.group({
    name: [''],
    description: [''],
    location: this.fb.group({
      location_zone: [''],
      location_x: [''],
      location_y: ['']
    }),
    ellipse: this.fb.group({
      ellipse_width: [''],
      ellipse_length: [''],
      ellipse_azimuth: ['']
    }),
    type: [''],
    classification: [''],
    activity: [''],
    certainty_level: ['']
  });


  constructor( private fb: FormBuilder) { }

  ngOnInit() {
  }

}
