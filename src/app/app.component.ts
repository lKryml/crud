import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'crud';
  constructor(private dataService: DataService) {}
  ngOnInit(): void {
    this.dataService.getData().subscribe((data) => {
      console.log(data);
    });
  }
}
