import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolygonsDisplayComponent } from './components/display/polygons-display/polygons-display.component';
import { DrawCircleComponent } from './components/edit/draw-circle/draw-circle.component';
import { DrawPolygonComponent } from './components/edit/draw-polygon/draw-polygon.component';
import { DrawPolylineComponent } from './components/edit/draw-polyline/draw-polyline.component';

@NgModule({
  declarations: [PolygonsDisplayComponent, DrawCircleComponent, DrawPolygonComponent, DrawPolylineComponent],
  imports: [
    CommonModule
  ]
})
export class MapModule { }
