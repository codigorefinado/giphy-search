import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Title } from '@angular/platform-browser';
import { GiphySearchService } from '../giphy-search.service';
import { Giphy } from './giphy.type';

@Component({
  selector: 'giphy-search-manual',
  templateUrl: 'giphy-search-manual.component.html'
})

export class GiphySearchManualComponent implements OnInit {

  gifs: Giphy[] = [];
  limit: string;
  term: string;

  constructor(private title: Title, private giphySearchService: GiphySearchService) {
  }

  ngOnInit() {
    this.title.setTitle('By Clayton');
  }

  pesquisarGiphy() {
    this.giphySearchService.pesquisarGiphy(this.limit, this.term)
      .subscribe((response: Response) => this.gifs = response.json().data);
  }
}
