import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PolygonsDisplayComponent } from './components/display/polygons-display/polygons-display.component';
import { DrawCircleComponent } from './components/edit/draw-circle/draw-circle.component';
import { DrawPolygonComponent } from './components/edit/draw-polygon/draw-polygon.component';
import { DrawPolylineComponent } from './components/edit/draw-polyline/draw-polyline.component';
import { MapComponent } from './components/map/map/map.component';
import { MapProviderComponent } from './components/map-provider/map-provider/map-provider.component';
import { MAP_CONFIG_PROVIDER, mapConfigFactory } from './config/map.config';
import { FEConfigCoreService } from '../core/service/configCore.service';

@NgModule({
  declarations: [PolygonsDisplayComponent,
                 DrawCircleComponent,
                 DrawPolygonComponent,
                 DrawPolylineComponent,
                 MapComponent,
                 MapProviderComponent],
  imports: [
    CommonModule
  ],
  providers: [
    {provide: 'mapConfig-key', useValue: 'mapConfig'},
    {
      provide: MAP_CONFIG_PROVIDER,
      useFactory: mapConfigFactory,
      deps: [FEConfigCoreService, 'mapConfig-key']
    }
  ],
  exports: [MapComponent]
})
export class MapModule { }
