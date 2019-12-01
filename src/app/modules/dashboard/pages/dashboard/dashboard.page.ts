import { Component, HostListener, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IAppState } from 'src/app/core/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { TranslateService } from '@ngx-translate/core';
import { AlertController } from '@ionic/angular';
import * as Highcharts from 'highcharts';
import { black } from 'color-name';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
})
export class DashboardPage {

  highcharts = Highcharts;
  chartOptionsExpected;
  chartOptionsCurrent;

  chartCallback = (chart) => {
    setTimeout(() => {
      chart.reflow();
      this.chartOptionsExpected = this.getChartOptionsExpected();
    }, 0);
  };
  constructor(private router: Router,
    private store: Store<IAppState>,
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private alertCtrl: AlertController) {
  }


  ngOnInit() {
    this.chartOptionsExpected = this.getChartOptionsExpected();
    this.chartOptionsCurrent = this.getChartOptionsCurrent();
  }

  private getChartOptionsExpected(): Object {

    return {
      title: {
        text: 'Expected'
      },
      credits: {
        enabled: false
      },
      chart: {
        type: "pie",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          },
          showInLegend: false
        }
      },
      series: [{
        name: 'Reciclaje',
        colorByPoint: true,
        data: [{
          name: 'PVE',
          y: 40,
          sliced: true,
          selected: true,
          color: '#7ade79'
        }, {
          name: 'ORG',
          y: 40,
          color: '#79bdde'
        }, {
          name: 'RESTO',
          y: 20,
          color: 'orange'
        }]
      }]
    }
  }

  private getChartOptionsCurrent(): Object {

    return {
      title: {
        text: 'Actual'
      },
      credits: {
        enabled: false
      },
      chart: {
        type: "pie",
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          },
          showInLegend: false
        }
      },
      series: [{
        name: 'Reciclaje',
        colorByPoint: false,
        data: [{
          name: 'PVE',
          y: 15,
          sliced: true,
          selected: true,
          color: '#7ade79'
        }, {
          name: 'ORG',
          y: 10,
          color: '#79bdde'
        }, {
          name: 'RESTO',
          y: 75,
          color: 'orange'
        }]
      }]
    }
  }
}
