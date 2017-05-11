import { Component, Input, OnInit } from '@angular/core';
import { Giphy } from '../giphy-search-manual/giphy.type';

@Component({
  selector: 'giphy-search-list',
  templateUrl: './giphy-search-list.component.html'
})
export class GiphySearchListComponent implements OnInit {

  @Input()
  gifsList: Giphy[] = [];

  constructor() {
  }

  ngOnInit() {
  }

}
