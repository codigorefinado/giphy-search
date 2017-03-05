import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    FormsModule,
    HttpModule,
    RouterModule, ],
  exports: [
    FormsModule,
    HttpModule,
    RouterModule, ],
  providers: [],
})
export class ShareModule {
}
