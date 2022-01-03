import { Component, OnInit } from '@angular/core';

import { ActivityDataEntry } from '../time-tracking-data';
import { ActivityService } from '../activity.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  activityData: any = [];


  constructor(private activityService: ActivityService) {
  }

  ngOnInit(): void {
    this.activityData = this.activityService.getActivityData();

    console.log(this.activityData);
  }

}
