import {Component, OnInit} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'visitors-statistic-chart',
  templateUrl: './line-chart-template/line-chart-template.html',
  styleUrls: ['./line-chart-template/line-chart-style.css']
})

export class VisitorsStatisticChart implements OnInit {
  ChartTitle: string = 'Today\'s Visitors';
  ChartValue: number = 16.481;
  date: Date;
  hours: any;
  minutes: any;
  seconds: any;

  public lineChartData: any = {
    chartType: 'AreaChart',
    dataTable: [
      [Number, Number, {'type': 'string', 'role': 'tooltip', 'p': {'html': true}}],
      [0, 0, ''], [0, 0, ''], [0, 0, ''], [0, 0, ''], [0, 0, ''], [0, 0, ''],
      [0, 0, ''], [0, 0, ''], [0, 0, ''], [0, 0, ''], [0, 0, ''], [0, 0, ''],
      [0, 0, ''], [0, 0, ''], [0, 0, ''], [0, 0, ''], [0, 0, ''], [0, 0, ''],
      [0, 0, ''], [0, 0, ''], [0, 0, ''], [0, 0, ''], [0, 0, ''], [0, 0, ''], [0, 0, '']
    ],
    options: {
      tooltip: {isHtml: true},
      series: {0: {color: 'rgb(66, 133, 244)'}},
      backgroundColor: 'transparent',
      width: '100%',
      height: '200px',
      theme: {
        chartArea: {
          width: '90%',
          height: '80%'
        },
        legend: {position: 'none'},
        titlePosition: 'out',
        axisTitlePosition: 'out',
        hAxis: {
          gridlines: {count: 12},
          minValue: 0,
          ticks: [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24]
        },
        vAxis: {
          textPosition: 'out',
          gridlines: {count: 6},
          ticks: [0, 200, 400, 600, 800, 1000],
          baselineColor: '#cdc6bf',
          minValue: 0,
          maxValue: 1000
        }
      },
      animation: {
        duration: 1000,
        easing: 'out',
        startup: true
      }
    }
  };

  ngOnInit() {

    this.Watch();

    this.lineChartData = Object.create(this.lineChartData);
    for (let i = 0; i < 25; i++) {
      let point = Math.round(Math.random() * 1000);
      this.lineChartData.dataTable[i + 1][0] = i;
      this.lineChartData.dataTable[i + 1][1] = point;
      this.lineChartData.dataTable[i + 1][2] = createCustomHTMLContent(point.toString());
    }
  }

  Watch() {

    this.date = new Date();
    this.hours = this.date.getHours();
    this.minutes = this.date.getMinutes();
    this.seconds = this.date.getSeconds();
    if (this.hours < 10) this.hours = "0" + this.hours;
    if (this.minutes < 10) this.minutes = "0" + this.minutes;
    if (this.seconds < 10) this.seconds = "0" + this.seconds;

    setTimeout(() => this.Watch(), 1000);
  }
}

function createCustomHTMLContent(point) {
  return '<div style="padding: 5px; background-color: #3e3e3e; opacity: 0.65; font-size: 12px; color: #fff;"> Total value: ' + '<b>' + point + '</b>' + '</div>';
}
