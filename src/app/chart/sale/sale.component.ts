import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'app-sale',
    standalone: true,
    imports: [ChartModule],
    templateUrl: './sale.component.html',
    styleUrl: './sale.component.css'
})
export class SaleComponent implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const textColor = "red";
        const textColorSecondary = "blue";
        const surfaceBorder = "orange";

        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [60, 70, 80, 75, 90, 100, 110],
                    fill: true,
                    borderColor: '#0d6efd',
                    backgroundColor: '#CAD8F0',
                    tension: 0.4
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 4.5,
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                  display: false,
                },
                y: {
                  display: false,
                }
            }
        };
    }
}