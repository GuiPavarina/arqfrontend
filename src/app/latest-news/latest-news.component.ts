import { Component, OnInit } from '@angular/core';
import { CatService, CatFact } from './services/cat.service';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.css']
})
export class LatestNewsComponent implements OnInit {

  catFacts: CatFact[] = [];

  constructor(
    private catService: CatService
  ) { }

  ngOnInit(): void {
    this.catService.getRandom().subscribe(data => {
      this.catFacts = data;
    });
  }

}
