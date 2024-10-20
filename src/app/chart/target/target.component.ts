import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './target.component.html',
  styleUrl: './target.component.css'
})
export class TargetComponent implements OnInit {
  data: any;

  options: any;

  ngOnInit() {
      const textColor = 'red';

      this.data = {
          labels: ['A', 'B', 'C'],
          datasets: [
              {
                  data: [300, 50, 100],
                  backgroundColor: [],
                  hoverBackgroundColor: []
              }
          ]
      };


      this.options = {
          cutout: '60%',
          plugins: {
              legend: {
                  display: false,
                  labels: {
                      color: textColor
                  }
              }
          }
      };
  }
}
