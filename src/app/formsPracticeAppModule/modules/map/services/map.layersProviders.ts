import { Inject, Injectable } from '@angular/core';
import { MAP_CONFIG_PROVIDER } from '../config/map.config';
import { MapConfigInterface, MapProviderTypes, unifyMapProvider, WebMapTileServiceImageryProvider } from '../config/map.config.interface';
import { MapLayerProviderOptions } from 'angular-cesium';


@Injectable()
export class MapLayersProviders {
  vieweerOptions;

  constructor(
    @Inject(MAP_CONFIG_PROVIDER) public mapConfig: MapConfigInterface) {
    this.vieweerOptions = {
      timeline: false,
      infoBox: false,
      baseLayerPicker: false,
      geocoder: false,
      navigationHelpButton: false,
      sceneModePicker: false,
      navigationInstructionsInitiallyVisible: false,
      terrainProviderViewModels: [],
      // imageryProvider: this.setProvider(this.mapConfig.mapProviders[0]),
      skyBox: false,
      skyAtmosphere: false,
      contextOptions: {
        webgl: {
          alpha: true
        }
      }
    };
  }

  getSecondery(): {options: any, type: MapLayerProviderOptions} {
    return this.mapConfig.mapProviders[1] ? {
      options: this.setProvider(this.mapConfig.mapProviders[1]),
      type: this.mapProviderTypeToGlobalProvider(this.mapConfig.mapProviders[1].type)
    } : undefined;
  }

  setProvider(mapProvider: unifyMapProvider) {
    switch (mapProvider.type) {
      case MapProviderTypes.custom: {
        delete mapProvider.type;
        return mapProvider;
      }
      case MapProviderTypes.WebMapTileServiceImageryProvider: {
        const webMapTileServiceImageryProvider:
          WebMapTileServiceImageryProvider = <WebMapTileServiceImageryProvider>mapProvider;
        return new Cesium.WebMapTileServiceImageryProvider({
          url: webMapTileServiceImageryProvider.url,
          layer: webMapTileServiceImageryProvider.layer,
          tileMatrixSetID: webMapTileServiceImageryProvider.tileMatrixSetID,
          tileMatrixLabels: webMapTileServiceImageryProvider.tileMatrixLabels,
          style: webMapTileServiceImageryProvider.style,
          format: webMapTileServiceImageryProvider.format,
          credit: new Cesium.Credit(webMapTileServiceImageryProvider.credit),
          tiled: webMapTileServiceImageryProvider.tiled,
          rectangle: webMapTileServiceImageryProvider.rectangle ?
            Cesium.Rectangle.fromDegrees(...webMapTileServiceImageryProvider.rectangle) : null,
          proxy: webMapTileServiceImageryProvider.proxy == null ?
            null : new Cesium.DefaultProxy(webMapTileServiceImageryProvider.proxy)
        });
      }
      case MapProviderTypes.ArcGisMapServerImageryProvider: {
        const arcGisMapServerImageryProvider: any = <any>mapProvider;
        return new Cesium.ArcGisMapServerImageryProvider({
          url: arcGisMapServerImageryProvider.url,
          layer: arcGisMapServerImageryProvider.layer,
          credit: new Cesium.Credit(arcGisMapServerImageryProvider.credit),
          rectangle: arcGisMapServerImageryProvider.rectangle ?
            Cesium.Rectangle.fromDegrees(...arcGisMapServerImageryProvider.rectangle) : null,
          proxy: arcGisMapServerImageryProvider.proxy == null ?
            null : new Cesium.DefaultProxy(arcGisMapServerImageryProvider.proxy)
        });
      }
      case MapProviderTypes.UrlTemplateImageryProvider: {
        const urlTemplateImageryProvider: any = <any>mapProvider;
        return new Cesium.UrlTemplateImageryProvider({
          url: urlTemplateImageryProvider.url,
          credit: new Cesium.Credit(urlTemplateImageryProvider.credit),
          rectangle: urlTemplateImageryProvider.rectangle ?
            Cesium.Rectangle.fromDegrees(...urlTemplateImageryProvider.rectangle) : null,
        });
      }
      default:
        return {
          url: 'https://dev.virtualearth.net',
          key: 'AkXEfZI-hKtZ995XgjM0XHxTiXpyS4i2Vb4w08Pjozwn-NAfVIvvHBYaP6Pgi717'
        };
    }
  }

  mapProviderTypeToGlobalProvider(type: MapProviderTypes):  MapLayerProviderOptions {
    switch (type) {
      case MapProviderTypes.WebMapServiceImageryProvider:
        return MapLayerProviderOptions.WebMapService;
      case MapProviderTypes.WebMapTileServiceImageryProvider:
        return MapLayerProviderOptions.WebMapTileService;
      default:
        return MapLayerProviderOptions.BingMaps;
    }
  }


}
