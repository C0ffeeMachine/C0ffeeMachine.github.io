import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/PersonalInfo';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit{

  skills!: Skill[];

  constructor(){}

  ngOnInit(): void {
    this.skills = [
      {
        name: "Java8",
        level: "Expert",
        rating: 80
      },
      {
        name: "Cpp",
        level: "Expert",
        rating: 80
      },
      {
        name: "Spring Boot",
        level: "Expert",
        rating: 85
      },
      {
        name: "Angular",
        level: "Intermediate",
        rating: 70
      },
      {
        name: "MySQL",
        level: "Intermediate",
        rating: 60
      },
      {
        name: "TypeScript",
        level: "Intermediate",
        rating: 60
      },
      {
        name: "System Design",
        level: "Intermediate",
        rating: 75
      },
      {
        name: "Git",
        level: "Expert",
        rating: 80
      },
      {
        name: "Maven",
        level: "Expert",
        rating: 90
      },{
        name: "Problem Solving and Data Structures/Algorithms",
        level: "Expert",
        rating: 80
      },
      {
        name: "Design Patterns",
        level: "Intermediate",
        rating: 70
      }
    ];
  }

}
