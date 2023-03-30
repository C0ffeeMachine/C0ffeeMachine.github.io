import { Component, OnInit } from '@angular/core';
import { Education } from '../models/PersonalInfo';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit{

  educationList!: Education[];

  constructor(){}

  ngOnInit(): void {
    this.educationList = [{
      institute: "Jaypee Institute of information Technology,Noida",
      course: "B.Tech",
      duration: "2017-2021",
      score: "7.5 CGPA"
    },
    {
      institute: "City Montessori School,Lucknow",
      course: "Senior Secondary in Physics, Chemistry, Maths",
      duration: "2015-2016",
      score: "92%"
    }];
  }

}
