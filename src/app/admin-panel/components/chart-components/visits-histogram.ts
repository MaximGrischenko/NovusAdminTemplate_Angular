import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'visits-histogram',
  template: `
    <google-chart [data]="columnChartData" (click)="changeData()"></google-chart>
  `
})

export class VisitsHistogram implements OnInit {
  public columnChartData: any = {
    chartType: 'ColumnChart',
    dataTable: [
      [Number, Number, {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}],
      [0, 0, ''],
      [0, 0, ''],
      [0, 0, ''],
      [0, 0, ''],
      [0, 0, ''],
      [0, 0, ''],
      [0, 0, ''],
      [0, 0, ''],
      [0, 0, ''],
      [0, 0, ''],
      [0, 0, ''],
      [0, 0, ''],
      [0, 0, '']
    ],
    options: {
      tooltip: {isHtml: true},
      series: {0: {color: '#3e3e3e'}},
      backgroundColor: 'transparent',
      titleTextStyle: {fontSize: 0},
      width: 89,
      height: 50,
      bar: {groupWidth: 5},
      theme: {
        chartArea: {
          width: '100%',
          height: '100%'
        },
        legend: {position: 'none'},
        titlePosition: 'in',
        axisTitlePosition: 'in',
        hAxis: {
          textPosition: 'in',
          gridlines: {count: 0}
        },
        vAxis: {
          textPosition: 'in',
          gridlines: {count: 0},
          baselineColor: '#8fd7d4',
          minValue: 0,
          maxValue: 40
        }
      },
      animation: {
        duration: 1000,
        easing: 'out',
        startup: true
      }
    }
  };

  ngOnInit () {
    this.columnChartData = Object.create(this.columnChartData);
    for (let i = 1; i < 14; i++) {
      let point = Math.round(Math.random() * 40);
      this.columnChartData.dataTable[i][0] = i;
      this.columnChartData.dataTable[i][1] = point;
      this.columnChartData.dataTable[i][2] = createCustomHTMLContent(point.toString());
    }
  }

  public changeData(): void {
    this.columnChartData = Object.create(this.columnChartData);
    for (let i = 1; i < 14; i++) {
      let point = Math.round(Math.random() * 40);
      this.columnChartData.dataTable[i][1] = point;
      this.columnChartData.dataTable[i][2] = createCustomHTMLContent(point.toString());
    }
  }
}

function createCustomHTMLContent(point) {
  return '<div style="padding: 3px 8px 3px 8px; font-size: 10px; background-color: #e86f56;">' + '<b>' + point + '</b>' + '</div>';
}
