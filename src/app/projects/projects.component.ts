import { Component, OnInit } from '@angular/core';
import { Project } from '../models/PersonalInfo';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit{

  projects!: Project[];

  constructor(){}

  ngOnInit(): void {
    this.projects = [
      {
        title: "Project one",
        technologies: "Spring Boot, Angular",
        description: [
          "point 1",
          "point 2"
        ]
      },
      {
        title: "Project two",
        technologies: "Spring Boot, Angular",
        description: [
          "point 1",
          "point 2"
        ]
      }
    ];
  }

}
