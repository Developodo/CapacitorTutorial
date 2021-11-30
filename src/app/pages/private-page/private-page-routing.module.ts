import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrivatePagePage } from './private-page.page';

const routes: Routes = [
  {
    path: '',
    component: PrivatePagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivatePagePageRoutingModule {}
