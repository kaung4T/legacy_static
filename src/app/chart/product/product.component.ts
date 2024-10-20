import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { Chart } from 'chart.js';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})

@Injectable()
export class ProductComponent implements OnInit {
    chart: any;
    data: any;

    options: any;

    ngOnInit() {
        const textColor = 'red';

        this.data = {
            labels: ['Electronics', 'Cloths', 'Beauty Care', 'Books', 'Toys'],
            datasets: [
                {
                    data: [300, 50, 100, 40, 113],
                    backgroundColor: ['#FC4827', '#4721FC', '#FCA825', '#46CDF0', '#2CDD7D'],
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
  

//   constructor(@Inject(DOCUMENT) public document: Document) {}
// 
//   ngOnInit() {
//     const canvas = this.document.querySelector('#canvas')! as HTMLCanvasElement;
//     this.chart = new Chart(canvas, {
//       type: 'doughnut',
//       data: {
//         labels: ['Data1', 'Data2'],
//         datasets: [
//           {
//             data: [55, 45],
//             backgroundColor: ['rgba(255, 0, 0, 1)', 'rgba(255, 0, 0, 0.1)'],
//           },
//         ],
//       },
//       options: {
//         plugins: {
//           legend: {
//               display: false,
//           }
//       },
//       },
//       plugins: [
//         {
//           id: 'text',
//           beforeDraw: function (chart, a, b) {
//             var width = chart.width,
//               height = chart.height,
//               ctx = chart.ctx;

//             ctx.restore();
//             var fontSize = (height / 114).toFixed(2);
//             ctx.font = fontSize + 'em sans-serif';
//             ctx.textBaseline = 'middle';

//             var text = '75%',
//               textX = Math.round((width - ctx.measureText(text).width) / 2),
//               textY = height / 2;

//             ctx.fillText(text, textX, textY);
//             ctx.save();
//           },
//         },
//       ],
//     });
//   }
}