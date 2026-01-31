import { Component } from '@angular/core';
import { DataService } from '../../core/services/data.service';
import { Projects } from '../../core/models/projects';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-single-page',
  imports: [ CommonModule],
  templateUrl: './single-page.html',
  styleUrl: './single-page.css',
})
export class SinglePage {


  projectsData: Projects[] = [];

  constructor(private serv: DataService) {
    this.showData();
  }

  //show data
  showData() {
    this.serv.get().subscribe((res: any) => {
      this.projectsData = res;
    });
  }
}
