import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  constructor(
    private http: HttpClient
  ) { }

  getRandom(): Observable<CatFact[]> {
    return this.http.get<CatFact[]>("https://cat-fact.herokuapp.com/facts/random?amount=3");
  }
}

export class CatFact{
  constructor(public createdAt: string, public text: string) {};
}