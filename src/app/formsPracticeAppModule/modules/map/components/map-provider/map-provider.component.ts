import { Component, Inject } from '@angular/core';
import { MapLayerProviderOptions } from 'angular-cesium';
import { MapLayersProviders } from '../../services/map.layersProviders';
import { MAP_CONFIG_PROVIDER } from '../../config/map.config';
import { MapConfigInterface } from '../../config/map.config.interface';

@Component({
  selector: 'app-map-provider',
  templateUrl: './map-provider.component.html',
  styleUrls: ['./map-provider.component.scss']
})
export class MapProviderComponent {

  options: Object;
  type: MapLayerProviderOptions;
  mapProviderOptions = {
    url: '',
    access_token: '',
    key: '',
    DEFAULT_VIEW_FACTOR: 0,
    baseLayerPicker: false
  };

  MapLayerProviderOptions = MapLayerProviderOptions;

  constructor(private mapLayersProviders: MapLayersProviders,
              @Inject(MAP_CONFIG_PROVIDER) public mapConfig: MapConfigInterface) {
    const secondery = this.mapLayersProviders.getSecondery();
    if (secondery) {
      this.type = secondery.type;
      this.options = secondery.options;
    }
  }
}
