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
      ["name", "yash Shukla"],
      ["dob", "26/03/1998"],
      ["education", "B.Tech Computer Science and Engineering"],
      ["workExp", "2+ years"],
      ["interests", "football"]
    ];
    this.aboutMe = ["I am a software engineer with 2+ years of experience in developing scalable , maintainable , low latency systems using spring boot, java, microservices , etc." ,
    "I am willing to learn new Tech and system design to contribute to the organisation growth."];
  }

}
