import { Injectable } from '@angular/core';

import { ActivityDataEntry } from './time-tracking-data';
import * as JsonData from "../assets/data.json";


@Injectable({
  providedIn: 'root'
})
export class ActivityService {


  constructor() { }

  getActivityData(): ActivityDataEntry[] {
    return JsonData.default;
  }

}
