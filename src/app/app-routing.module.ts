import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'page-one',
    loadChildren: () =>
      import('./page-one/page-one.module').then((m) => m.PageOneModule),
  },
  {
    path: 'page-two',
    loadChildren: () =>
      import('./page-two/page-two.module').then((m) => m.PageTwoModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
