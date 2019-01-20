import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-fueling-form',
  templateUrl: './fueling-form.component.html',
  styleUrls: ['./fueling-form.component.scss']
})
export class FuelingFormComponent implements OnInit {

  $classificationOptions = ['Ten', 'Dor-Alon', 'Sonol'];

  $activityOptions = ['Full', 'Half tank', 'Didnt work'];

  $certaintyOptions = [{level: 'Low'}, {level: 'Medium'}, {level: 'High'}];

  $fuelingType = ['Unleaded', 'Diesel', 'Lpg'];

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

  makeReadonly() {
     const inputs = document.querySelectorAll('.form_input');
     const dis = document.createAttribute('disabled');
     dis.value = 'true';
     for (let i = 0; i < inputs.length; i++ ) {
       inputs[i].setAttribute('disabled', 'true' );
       inputs[i].classList.add( 'form_readonly');
     }
  }

  makeEditable() {
    const inputs = document.querySelectorAll('.form_readonly');
    for (let i = 0; i < inputs.length; i++) {
      inputs[i].classList.remove('form_readonly');
      inputs[i].attributes.removeNamedItem('disabled');
    }
  }


  constructor( private fb: FormBuilder) { }

  ngOnInit() {
  }

}
