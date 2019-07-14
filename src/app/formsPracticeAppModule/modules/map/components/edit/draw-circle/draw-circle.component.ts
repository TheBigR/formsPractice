import { Component, OnInit } from '@angular/core';
import {CircleEditorObservable} from 'angular-cesium';
import {Observable, Subscription} from 'rxjs';
import {ChangeMapToolPayload} from '../../../store/map.actions';
import {select, Store} from '@ngrx/store';
import {selectedMapToolRequestSelector} from '../../../store/map.selectors';
import {filter, tap} from 'rxjs/operators';
import {MapToolEditors} from '../../../interface/map.interface';

@Component({
  selector: 'app-draw-circle',
  templateUrl: './draw-circle.component.html',
  styleUrls: ['./draw-circle.component.scss']
})
export class DrawCircleComponent implements OnInit {
  circle: CircleEditorObservable;
  subscriptions: Array<Subscription> = [];
  selectedMapToolRequest$: Observable<ChangeMapToolPayload> =
    this.store.pipe(
      select(selectedMapToolRequestSelector),
      filter(Boolean),
      tap(({mapTool, requestType}: ChangeMapToolPayload) =>
        (mapTool === MapToolEditors.circle)? this.startEdit(requestType) : this.stopEdit())
    );

  constructor(private store: Store<any>) { }

  ngOnInit() {
  }

  startEdit(requestType) {

  }

  stopEdit() {}

}
