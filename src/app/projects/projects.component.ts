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
        title: "Sim-Activation",
        technologies: "Java8, Spring Boot, MySql, Resilience4j, Eureka Service Discovery, Feign client/Rest Template, Zuul Api Gateway, Config Server",
        description: [
          "This is a cloud native application",
          "This project implements feature such as circuit breaker pattern for fault tolerance using Resilience4j",
          "Feign Client to consume REST services",
          "Client side load balancing using Netflix Ribbon",
          "Eureka service registry and service discovery",
          "Zuul Api Gateway",
          "Config Server for retrieving properties file using centralised git repository"
        ]
      },
      {
        title: "WeCare",
        technologies: "Java8, Spring Boot, MySql, Angular, Hystrix, Eureka Service Discovery, Rest Template, Config Server, Netflix Ribbon",
        description: [
          "This is a cloud native application",
          "This project implements feature such as circuit breaker pattern for fault tolerance/resilience using Hystrix",
          "Client side load balancing using Netflix Ribbon",
          "Eureka service registry and service discovery"
        ]
      },
      {
        title: "Minor Project",
        technologies: "Ns3 simulator, TCP",
        description: [
          "We developed a new TCP Congestion control algorithm named Elmod",
          "We achieved around 4 - 5 percent better results upon testing under different network condition like low-bandwidth and high BDP(Bandwidth Delay Product) networks."
        ]
      }
    ];
  }

}
