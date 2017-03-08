import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class TrafficChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }


  getData() {
    let dashboardColors = this._baConfig.get().colors.dashboard;
    return [
      {
        value: 2000,
        color: dashboardColors.white,
        highlight: colorHelper.shade(dashboardColors.white, 15),
        label: 'Unallocated',
        percentage: 15,
        order: 1,
      }, {
        value: 1500,
        color: dashboardColors.gossip,
        highlight: colorHelper.shade(dashboardColors.gossip, 15),
        label: 'RHEL 6.5',
        percentage: 25,
        order: 4,
      }, {
        value: 1000,
        color: dashboardColors.silverTree,
        highlight: colorHelper.shade(dashboardColors.silverTree, 15),
        label: 'RHEL 7.0',
        percentage: 45,
        order: 3,
      }, {
        value: 1200,
        color: dashboardColors.surfieGreen,
        label: 'Windows 2016',
        highlight: colorHelper.shade(dashboardColors.surfieGreen, 15),
        percentage: 10,
        order: 2,
      }, {
        value: 400,
        color: dashboardColors.blueStone,
        highlight: colorHelper.shade(dashboardColors.blueStone, 15),
        label: 'Ubuntu 16.04 LTS',
        percentage: 5,
        order: 0,
      },
    ];
  }
}
