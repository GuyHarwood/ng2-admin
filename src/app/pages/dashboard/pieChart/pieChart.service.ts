import {Injectable} from '@angular/core';
import {BaThemeConfigProvider, colorHelper} from '../../../theme';

@Injectable()
export class PieChartService {

  constructor(private _baConfig:BaThemeConfigProvider) {
  }

  getData() {
    let pieColor = this._baConfig.get().colors.custom.dashboardPieChart;
    return [
      {
        color: pieColor,
        description: 'Team Users',
        stats: '3756',
        icon: 'person',
      }, {
        color: pieColor,
        description: 'Daily Cost',
        stats: '$ 17,745',
        icon: 'money',
      }, {
        color: pieColor,
        description: 'Uptime',
        stats: '250,000',
        icon: 'face',
      }, {
        color: pieColor,
        description: 'ROI',
        stats: '32,592',
        icon: 'refresh',
      }
    ];
  }
}
