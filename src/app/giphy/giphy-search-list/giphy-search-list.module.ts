import { NgModule } from '@angular/core';
import { ShareModuleModule } from 'app/share/share.module';
import { GiphySearchListComponent } from './giphy-search-list.component';

@NgModule({
  imports: [ ShareModuleModule ],
  exports: [ GiphySearchListComponent ],
  declarations: [ GiphySearchListComponent ]
})
export class GiphySearchListModule {
}
