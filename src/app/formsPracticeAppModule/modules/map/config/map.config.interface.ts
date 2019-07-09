

export interface MapConfigInterface {
  ionToken: string;
  eclipse_granularity: number;
  mapProviders: Array<unifyMapProvider>;
  viewerConfigurationOptions: {
    skybox: boolean,
    skyAtmosphere: boolean,
    contextOptions: {
      webgl: {
        alpha: boolean
      }
    }
  };
  isDiplayed: {
    acd: boolean,
    gmti: boolean,
    comint: boolean,
    elint: boolean,
    multi: boolean,
    site: boolean
  };
}

export interface MapProvider {
  type: MapProviderTypes;
  url: string;
}

export enum MapProviderTypes {
  WebMapServiceImageryProvider = 'WebMapServiceImageryProvider',
  WebMapTileServiceImageryProvider = 'WebMapTileServiceImageryProvider',
  ArcGisMapServerImageryProvider = 'ArcGisMapServerImageryProvider',
  UrlTemplateImageryProvider = 'UrlTemplateImageryProvider',
  offline = 'offline',
  custom = 'custom'
}

export interface WebMapServiceInterface extends MapProvider {
  credit: any;
  rectangle: any;
  proxy: any;
}

export interface WebMapServiceImageryProvider extends WebMapServiceInterface {
  layers: any;
}

export interface WebMapTileServiceImageryProvider extends WebMapServiceInterface {
  tileMatrixSetID: any;
  tileMatrixLabels: any;
  layer: any;
  style: any;
  format: any;
  tiled: boolean;
}

export type unifyMapProvider = WebMapServiceImageryProvider | WebMapTileServiceImageryProvider;
