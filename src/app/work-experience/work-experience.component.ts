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
        role: "Digital Specialist Engineer",
        company: "Infosys Ltd",
        duration: "June,2021-present",
        description: [
          "I worked in the domain of Financial Service wherein I have developed and delivered REST Apis",
          "Improved few of the apis by replacing the sequential calls with the asynchronus calls (used completable future from java 8) , hence improved the latency and responsiveness",
          "I made a new microservice for the Loan Rate Functionality which enhanced ease of understanding , scalability and maintainability of the service",
          "Implemented Drools Engine on Loan Eligibility Service to ascertain accounts eligibility as well as customer eligibility for pledging the accounts for the loan booking",
          "Used Arcata service discovery and declarative rest client for the integration of other microservice into Loan Orchestration service",
          "Took internal certification of GCP(Google Cloud Platform)"
        ]
      }
    ];
  }

}
