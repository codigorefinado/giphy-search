import { NgModule } from '@angular/core';
import { GiphySearchManualComponent } from './giphy-search-manual.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: '', component: GiphySearchManualComponent }
    ])
  ]
})
export class GiphySearchManualRoutingModule {
}
