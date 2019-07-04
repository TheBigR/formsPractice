import { HttpClient } from '@angular/common/http';
import { FEConfigCoreService } from './modules/core/service/configCore.service';
import { take } from 'rxjs/operators';
import { IFEConfig } from '../../shared/contracts/interfaces/config.interface';



export function onFEInit(http: HttpClient, configService: FEConfigCoreService): () => Promise<any> {
  return (): Promise<any> => {
    return new Promise((resolve, reject) => {
      http.get('assets/config.json')
        .pipe(take(1))
        .subscribe((data: {defaultData: IFEConfig}) => {
          configService.config = data.defaultData;
          console.log(configService.config);
          resolve();
        });
    });
  };
}
