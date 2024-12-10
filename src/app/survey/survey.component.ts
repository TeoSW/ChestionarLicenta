import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-survey',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './survey.component.html',
  styleUrl: './survey.component.scss',
})
export class SurveyComponent{
  isSubmitted = false;
  
  surveyData = {
    age: '',
    gender: '',
    education: '',
    sector: '',
    neighborhood: '',
    residenceDuration: '',
    mainTransport: '',
    trafficIssues: '',
    timeInTraffic: '',
    parkingEase: '',
    cityCenterParkingEase: '',
    illegalParking: '',
    undergroundParking: '',
    biggestTrafficProblem: '',
    trafficImprovements: '',
    bikeLanesSatisfaction: '',
    bikeLaneSafety: '',
    cleanlinessPublicTransport: '',
    publicTransportSufficiency: '',
    metroStationsNumber: '',
    preferBikeIfBetterInfrastructure: '',
    bikeImprovements: '',
    neighborhoodSatisfaction: '',
    legalConstruction: '',
    sidewalkSpace: '',
    roadSpace: '',
    sunCoveredAreas: '',
    benchesAvailability: '',
    illegalParkingMeasures: '',
    otherIssues: '',
    additionalExperience: ''
  };


  currentRoute: string = '';


  
  onSubmit(): void {
    console.log('Form submitted!', this.surveyData);
    this.isSubmitted = true; 
  }

}
