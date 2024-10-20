import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.css'
})
export class CustomerComponent implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const textColor = "red";
        const textColorSecondary = "red";
        const surfaceBorder = "red";

        this.data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [45, 59, 57, 51, 56, 60, 64],
                    fill: true,
                    borderColor: "#0D6EFD",
                    backgroundColor: '#CAD8F0',
                    tension: 0.4
                },
                {
                    label: 'Second Dataset',
                    data: [58, 85, 80, 69, 76, 87, 90],
                    fill: true,
                    borderColor: "#48D75D",
                    backgroundColor: '#A0EDD2',
                    tension: 0.4
                }
            ]
        };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 2.7,
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
