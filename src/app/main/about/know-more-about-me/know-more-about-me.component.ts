import { Component, OnInit } from '@angular/core';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_kelly from "@amcharts/amcharts4/themes/kelly";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

// Themes begin
am4core.useTheme(am4themes_kelly);
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-know-more-about-me',
  templateUrl: './know-more-about-me.component.html',
  styleUrls: ['./know-more-about-me.component.scss']
})
export class KnowMoreAboutMeComponent implements OnInit {
  categoryAxis: am4charts.Axis<am4charts.AxisRendererRadial>;
  valueAxis: am4charts.Axis<am4charts.AxisRendererCircular>;

  constructor() { }

  ngOnInit(): void {
    let chart = am4core.create("chartdiv", am4charts.RadarChart);

    // Add data
    chart.data = [{
      "category": "Research",
      "value": 80,
      "full": 100
    }, {
      "category": "Marketing",
      "value": 35,
      "full": 100
    }, {
      "category": "Distribution",
      "value": 92,
      "full": 100
    }, {
      "category": "Human Resources",
      "value": 68,
      "full": 100
    }];
    
    // Make chart not full circle
    chart.startAngle = -90;
    chart.endAngle = 180;
    chart.innerRadius = am4core.percent(20);
    
    // Set number format
    chart.numberFormatter.numberFormat = "#.#'%'";
    
    // Create axes
    this.categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    this.categoryAxis.dataFields['category'] = "category";
    this.categoryAxis.renderer.grid.template.location = 0;
    this.categoryAxis.renderer.grid.template.strokeOpacity = 0;
    this.categoryAxis.renderer.labels.template.horizontalCenter = "right";
    this.categoryAxis.renderer.labels.template.fontWeight = '500';
    this.categoryAxis.renderer.labels.template.adapter.add("fill", function(fill, target) {
      return (target.dataItem.index >= 0) ? chart.colors.getIndex(target.dataItem.index) : fill;
    });
    this.categoryAxis.renderer.minGridDistance = 10;
    
    this.valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    this.valueAxis.renderer.grid.template.strokeOpacity = 0;
    this.valueAxis['min'] = 0;
    this.valueAxis['max'] = 100;
    this.valueAxis['strictMinMax'] = true;
    
    // Create series
    let series1 = chart.series.push(new am4charts.RadarColumnSeries());
    series1.dataFields.valueX = "full";
    series1.dataFields.categoryY = "category";
    series1.clustered = false;
    series1.columns.template.fill = new am4core.InterfaceColorSet().getFor("alternativeBackground");
    series1.columns.template.fillOpacity = 0.08;
    series1.columns['templatecornerRadiusTopLeft'] = 20;
    series1.columns.template.strokeWidth = 0;
    series1.columns.template.radarColumn.cornerRadius = 20;
    
    let series2 = chart.series.push(new am4charts.RadarColumnSeries());
    series2.dataFields.valueX = "value";
    series2.dataFields.categoryY = "category";
    series2.clustered = false;
    series2.columns.template.strokeWidth = 0;
    series2.columns.template.tooltipText = "{category}: [bold]{value}[/]";
    series2.columns.template.radarColumn.cornerRadius = 20;
    
    series2.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
    
    // Add cursor
    chart.cursor = new am4charts.RadarCursor();
    
  }



}
