import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// add component for routing
import { MainComponent } from './main/main.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  {
    path: 'weather',
    component: MainComponent,
    children: [
      { path: 'wind/:wind',component: ChildComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
