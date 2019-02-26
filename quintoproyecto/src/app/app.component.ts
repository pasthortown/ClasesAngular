import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'quintoproyecto';

  // bar chart
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = [];
  public barChartType: string = 'line';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
  ];

  constructor() {

  }

  ngOnInit() {
    this.barChartLabels = [];
    const datosSeno = [];
    const datosCoseno = [];
    for (let i = 0; i <= 720; i = i + 45) {
      this.barChartLabels.push(i.toString());
      datosSeno.push(Math.sin(i * Math.PI / 180));
      datosCoseno.push(Math.cos(i * Math.PI / 180));
    }
    this.barChartData.push({data: datosSeno, label: 'Seno'});
    this.barChartData.push({data: datosCoseno, label: 'Coseno'});
  }
}
