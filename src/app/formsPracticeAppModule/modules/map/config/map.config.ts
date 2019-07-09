import { InjectionToken } from '@angular/core';
import { MapConfigInterface } from './map.config.interface';
import { FEConfigCoreService } from '../../core/service/configCore.service';


export const MAP_CONFIG_PROVIDER: InjectionToken<MapConfigInterface> = new InjectionToken('MAP_CONFIG_PROVIDER');

export function mapConfigFactory(feConfigeService: FEConfigCoreService, mapDataKey: string) {
  return feConfigeService.config[mapDataKey];
}
