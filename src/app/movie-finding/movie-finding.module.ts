import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieFindingPageRoutingModule } from './movie-finding-routing.module';

import { MovieFindingPage } from './movie-finding.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieFindingPageRoutingModule
  ],
  declarations: [MovieFindingPage]
})
export class MovieFindingPageModule {}
