import { Component, OnInit } from '@angular/core';
import { Skill } from '../_DTO/skill';
import { skills, languages, otherSkills } from './skills';
import { Language } from '../_DTO/language';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'cv-abilities',
  templateUrl: './abilities.component.html',
  styleUrls: ['./abilities.component.scss'],
  animations: [
    trigger('growBar', [
      transition(':enter', [
        style({ width: 0 }),
        animate('0.9s', style({ width: '*' })),
      ]),
    ])
  ]
})
export class AbilitiesComponent implements OnInit {

  public mySkills: Skill[] = skills;
  public myLanguages: Language[] = languages;
  public myOtherSkills: string[] = otherSkills;

  constructor() { }

  ngOnInit() {
  }

}
