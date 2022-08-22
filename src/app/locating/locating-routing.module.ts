import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LocatingPage } from './locating.page';

const routes: Routes = [
  {
    path: '',
    component: LocatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocatingPageRoutingModule {}
