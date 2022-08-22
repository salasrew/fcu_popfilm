import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocatingPageRoutingModule } from './locating-routing.module';

import { LocatingPage } from './locating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocatingPageRoutingModule
  ],
  declarations: [LocatingPage]
})
export class LocatingPageModule {}
