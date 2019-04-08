import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GithubRepository } from '../_DTO/githubDTO';

@Injectable({
  providedIn: 'root'
})
export class GithubConnectionService {

  constructor(private http: HttpClient) { }

  public getRepositories() {
    return this.http.get<GithubRepository>('https://api.github.com/users/JuanCangelosi/repos');
  }
}
