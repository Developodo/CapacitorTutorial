import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrivatePagePageRoutingModule } from './private-page-routing.module';

import { PrivatePagePage } from './private-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrivatePagePageRoutingModule
  ],
  declarations: [PrivatePagePage]
})
export class PrivatePagePageModule {}
