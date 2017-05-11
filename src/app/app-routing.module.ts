import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [ RouterModule.forRoot([
    /**
     * Colocar rotas lazy
     */
  ]) ],
  exports: [ RouterModule ],
})
export class AppRoutingModule {
}
