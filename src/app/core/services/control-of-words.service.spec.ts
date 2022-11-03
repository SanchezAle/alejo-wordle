import { TestBed } from '@angular/core/testing';

import { ControlOfWordsService } from './control-of-words.service';

describe('ControlOfWordsService', () => {
  let service: ControlOfWordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControlOfWordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
