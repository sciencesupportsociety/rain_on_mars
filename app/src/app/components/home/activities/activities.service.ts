import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GeneralHttpService, ResponseData } from '../../../shared/general-http.service';
import { AppScope } from '../../../shared/appScope';
import { PATH } from '../../../shared/settings';

@Injectable()
export class ActivitiesService extends GeneralHttpService {

  constructor(protected http: Http, protected appScope: AppScope) {
    super(http, appScope);
  }

  public getShops = (): Promise<any[]> => {
    const requst = {
      data: {
        ...this.requestTemplate(),
        operation: 'demand_shops',
        clientsid: environment.walmoo.businessId,
        info: true,
      },
    };
    return this.post(PATH.wOutput, requst);
  }

  public getShopLoyalties = (shopsid: string): Promise<any[]> => {
    const requst = {
      data: {
        ...this.requestTemplate(),
        operation: 'demand_shop_loyalties',
        shopsid: shopsid,
      },
    };
    return this.post(PATH.wOutput, requst);
  }

  public getDoneLoyalties = (): Promise<any[]> => {
    const requst = {
      data: {
        ...this.requestTemplate(),
        operation: 'demand_consumer_loyalty_sum',
        clientsid: environment.walmoo.businessId,
      },
    };
    return this.post(PATH.wOutput, requst);
  }
}
