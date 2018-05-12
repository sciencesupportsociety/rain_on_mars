import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GeneralHttpService } from "../../shared/general-http.service";
import { environment } from "../../../environments/environment";
import { PATH } from "../../shared/settings";

@Injectable()
export class SurveyService extends GeneralHttpService {

  constructor(protected http: Http) {
    super(http, null);
  }

  public pushSurvey = (consumerId: string): Promise<void> => {
    const { apiHash, operatorUsername, surveyId } = environment.walmoo;
    const requst = {
      mobile: true,
      data: {
        login_hash: apiHash,
        username: operatorUsername,
        paswd: "345634dfg3246sdfs333211",
        instance: "10",
        operation: "add_coupons",
        consumers: [consumerId],
        amount: "1",
        coupons: surveyId,
      }
    };
    return this.post(PATH.wInput, requst);
  }
}
