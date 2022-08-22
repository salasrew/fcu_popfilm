import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieFindingPage } from './movie-finding.page';

const routes: Routes = [
  {
    path: '',
    component: MovieFindingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieFindingPageRoutingModule {}
