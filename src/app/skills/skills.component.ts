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
        name: "SpringBoot",
        level: "Expert",
        rating: 85
      },
      {
        name: "Java",
        level: "Expert",
        rating: 80
      }
    ];
  }

}
