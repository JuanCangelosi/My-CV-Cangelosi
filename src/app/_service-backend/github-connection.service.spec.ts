import { TestBed } from '@angular/core/testing';

import { GithubConnectionService } from './github-connection.service';

describe('GithubConnectionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubConnectionService = TestBed.get(GithubConnectionService);
    expect(service).toBeTruthy();
  });
});
