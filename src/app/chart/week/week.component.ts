import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
    selector: 'app-week',
    standalone: true,
    imports: [ChartModule],
    templateUrl: './week.component.html',
    styleUrl: './week.component.css'
})
export class WeekComponent implements OnInit {
    basicData: any;

    basicOptions: any;

    ngOnInit() {
        const textColor = "red";
        const textColorSecondary = "blue";
        const surfaceBorder = "orange";

        this.basicData = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620, 300, 200],
                    backgroundColor: [
                      '#FF3D00',
                      '#4200FF',
                      '#F2A300',
                      '#39CEF3',
                      '#2CDD7D',
                      '#197BB2',
                    ],
                    borderColor: [
                      '#FF3D00',
                      '#4200FF',
                      '#F2A300',
                      '#39CEF3',
                      '#2CDD7D',
                      '#197BB2',
                    ],
                    borderWidth: 1
                }
            ]
        };

        this.basicOptions = {
            maintainAspectRatio: false,
            aspectRatio: 1.75,
            plugins: {
                legend: {
                    display: false,
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        display: false,
                        
                    },
                    grid: {
                        display: false,
                        drawTicks: false,
                        drawBorder: false
                    },
                    border: {
                      display: false
                    }
                },
                x: {
                    ticks: {
                      
                    },
                    grid: {
                        display: false,
                        drawTicks: false
                    },
                    border: {
                      display: false
                    }
                },
            }
        };
    }
}