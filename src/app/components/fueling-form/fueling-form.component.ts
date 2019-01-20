import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Fueling} from './fueling.model';
import {FUELINGS} from './mock-fueling';
import {log} from 'util';


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
  selectedFueling: Fueling;
  fuelings = FUELINGS;
  cosher = ['Destroyed', 'Untouched', 'Partially destroyed'];

   fuelingForm = this.fb.group({
    id: [''],
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

  mockMe() {
    this.loadFueling(this.fuelings[0]);
    console.log('loading mock from file');
  }

  loadFueling(fueling: Fueling): void {
    this.selectedFueling = fueling;
    console.log(this.selectedFueling.type);
    console.log(fueling.type);
    this.fuelingForm.get('id').setValue(fueling.id);
    this.fuelingForm.get('name').setValue(fueling.name);
    this.fuelingForm.get('description').setValue(fueling.description);
    this.fuelingForm.get('location.location_zone').setValue(fueling.location.zone);
    this.fuelingForm.get('location.location_x').setValue(fueling.location.location_x);
    this.fuelingForm.get('location.location_y').setValue(fueling.location.location_y);
    this.fuelingForm.get('ellipse.ellipse_width').setValue(fueling.ellipse.width);
    this.fuelingForm.get('ellipse.ellipse_length').setValue(fueling.ellipse.length);
    this.fuelingForm.get('ellipse.ellipse_azimuth').setValue(fueling.ellipse.azimuth);
    this.fuelingForm.get('type').setValue(fueling.type);

    this.fuelingForm.get('classification').setValue(fueling.classification);
    this.fuelingForm.get('activity').setValue(fueling.activity);
    this.fuelingForm.get('certainty_level').setValue(fueling.certaintylevel);
  }


  constructor( private fb: FormBuilder) { }

  ngOnInit() {
  }

}
