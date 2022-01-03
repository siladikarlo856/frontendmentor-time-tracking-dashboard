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
  regex = new RegExp("[ ]+", "g");

  selectedTimeframe: string = "weekly";
  timeframeLabel: string = "week";

  constructor(private activityService: ActivityService) {
  }

  ngOnInit(): void {
    this.activityData = this.activityService.getActivityData();

    console.log(this.activityData);
  }

  onSelect(option: string): void {
    console.log(option);
    this.selectedTimeframe = option;

    switch (this.selectedTimeframe) {
      case "daily":
        this.timeframeLabel = "day";
        break;
      case "weekly":
        this.timeframeLabel = "week";
        break;
      case "monthly":
        this.timeframeLabel = "month";
        break;
    }

  }

}
