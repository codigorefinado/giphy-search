import { NgModule } from '@angular/core';
import { ShareModuleModule } from 'app/share/share.module';
import { GiphySearchListModule } from '../giphy-search-list/giphy-search-list.module';
import { GiphySearchService } from '../giphy-search.service';

import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { GiphySearchManualComponentRoutingModule } from './giphy-search-routing.module';

@NgModule({
  imports: [ ShareModuleModule, GiphySearchListModule, GiphySearchManualComponentRoutingModule ],
  exports: [ GiphySearchManualComponent ],
  declarations: [ GiphySearchManualComponent ],
  providers: [ GiphySearchService ],
})
export class GiphySearchManualComponentModule {
}
