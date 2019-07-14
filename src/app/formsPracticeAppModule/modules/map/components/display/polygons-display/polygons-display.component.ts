import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-polygons-display',
  templateUrl: './polygons-display.component.html',
  styleUrls: ['./polygons-display.component.scss']
})
export class PolygonsDisplayComponent implements OnInit {

  constructor(private store: Store<any>,
              ) { }

  ngOnInit() {
  }

}
