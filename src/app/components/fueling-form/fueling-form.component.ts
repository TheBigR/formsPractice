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

  $findingType = ['Command post', 'Vehicle', 'Weapon post'];

  cosher = ['Destroyed', 'Untouched', 'Partially destroyed'];

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

  makeEditable() {
     const inputs = document.querySelectorAll('.form_input');
     for (let i = 0; i < inputs.length; i++ ) {
        inputs[i].setAttribute('class', 'form_input5');
     }
  }


  constructor( private fb: FormBuilder) { }

  ngOnInit() {
  }

}
