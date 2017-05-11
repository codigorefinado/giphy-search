import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'giphy-search-list',
  templateUrl: './giphy-search-list.component.html'
})
export class GiphySearchListComponent implements OnInit {

  @Input()
  gifsList: any[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
