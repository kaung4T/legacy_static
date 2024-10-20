import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { CommonModule, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { CommonapiService } from './api/commonapi.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    SidebarComponent, 
    HomeComponent,
    CommonModule,
    JsonPipe
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'legacy_static';

  data: any[] = [];
  httpClient = inject(HttpClient);

  constructor(public common: CommonapiService) {
    
  }

  ngOnInit(): void {
    // this.fetchData();
    // this.common.fetchMe().subscribe((data: any) => {
    //       this.data = data;
    //     });
  }
  
  // fetchData () {
  //   this.httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe((data: any) => {
  //     this.data = data;
  //   })
  // }
}
