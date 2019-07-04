import { InjectionToken } from '@angular/core';
import { FEConfigCoreService } from '../service/configCore.service';


export const DATA_KEY = new InjectionToken('DATA_KEY');

export function configFactory(configService: FEConfigCoreService, dataKey: string) {
  return configService.config[dataKey];
}
