import { InjectionToken } from '@angular/core';
import { VactionConfigInterface } from '../interface/vaction.interface';
import { FEConfigCoreService } from '../../core/service/configCore.service';


export const VACTION_CONFIG: InjectionToken<VactionConfigInterface> = new InjectionToken('VACTION_CONFIG');

export function vactionConfigFactory(feConfigService: FEConfigCoreService, interceptionConfig: string) {
  return feConfigService.config[interceptionConfig];
}
