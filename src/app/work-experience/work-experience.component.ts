import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/PersonalInfo';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit{
  workExperienceList!: WorkExperience[];

  constructor(){}

  ngOnInit(): void {
    this.workExperienceList = [
      {
        role: "Software Engineer",
        company: "Infosys",
        duration: "2019",
        description: [
          "Worked in multiple domains",
          "Worked in Financila domain"
        ]
      },
      {
        role: "Software Engineer",
        company: "Infosys",
        duration: "2019",
        description: [
          "Worked in multiple domains",
          "Worked in Financila domain"
        ]
      }
    ];
  }

}
