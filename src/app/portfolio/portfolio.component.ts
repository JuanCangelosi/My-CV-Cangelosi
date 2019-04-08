import { Component, OnInit } from '@angular/core';
import { GithubConnectionService } from '../_service-backend/github-connection.service';
import { Observable } from 'rxjs';
import { GithubRepository } from '../_DTO/githubDTO';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'cv-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s', style({ opacity: 1 })),
      ]),
    ])
  ]
})
export class PortfolioComponent implements OnInit {

  public repos: Observable<GithubRepository>;

  constructor(private githubConnectionService: GithubConnectionService) { }

  ngOnInit() {
    this.repos = this.githubConnectionService.getRepositories();
  }

}
