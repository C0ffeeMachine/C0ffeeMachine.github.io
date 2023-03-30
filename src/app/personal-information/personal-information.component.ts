import { Component, OnInit } from '@angular/core';
import { PersonalInfo } from '../models/PersonalInfo';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss']
})
export class PersonalInformationComponent implements OnInit{

  myData!: string[][];
  aboutMe!: string[];

  constructor(){}

  ngOnInit(): void {
    this.myData = [
      ["Name", "Yash Shukla"],
      ["DOB", "26/03/1998"],
      ["Education", "B.Tech in Computer Science and Engineering"],
      ["Work Experience", "2+ years"],
      ["Interests", ""]
    ];
    this.aboutMe = ["As a software engineer with over 2 years of experience, I have gained a solid foundation in software development and have been exposed to various aspects of the software development life cycle.",
    "I have experience in developing scalable , maintainable , low latency systems using spring boot, java8, microservices architecture , etc. and have demonstrated my ability to deliver high-quality software on time.",
    "I am familiar with agile development methodologies and have worked in a team environment using tools like Git, JIRA.",
    "I have experience collaborating with other developers, designers, and stakeholders to deliver software that meets the requirements of the business.",
    "As a software engineer with 2+ years of experience, I am continuously learning and staying up-to-date with new technologies and industry trends."];
  }

}
