import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GiphySearchManualComponentModule } from './giphy/giphy-search-manual/giphy-search-manual.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    GiphySearchManualComponentModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
