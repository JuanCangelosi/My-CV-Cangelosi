import { Component, OnInit } from '@angular/core';
import { PreviousExperience } from '../_DTO/previous-experience';
import { educations, workExperience } from './about';

@Component({
  selector: 'cv-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  public education: PreviousExperience[] = educations;
  public workExperiences: PreviousExperience[] = workExperience;

  constructor() { }

  ngOnInit() {
  }

}
