import { NgModule } from '@angular/core';
import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { CommonModule } from '@angular/common';
import { GiphySearchManualRoutingModule } from './giphy-search-routing.module';
import { GiphySearchListModule } from '../giphy-search-list/giphy-search-list.module';
import { GiphySearchService } from '../giphy-search.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, GiphySearchManualRoutingModule, GiphySearchListModule, FormsModule,
  ],
  exports: [],
  declarations: [ GiphySearchManualComponent ],
  providers: [ GiphySearchService ],
})
export class GiphySearchManualModule {
}
