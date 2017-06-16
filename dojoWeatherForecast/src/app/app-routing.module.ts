import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// need to add the routing imports here, ex (for a /user route):
// import { UserComponent } from './home/user-component';
import { WeatherComponent } from './weather/weather.component';

const routes: Routes = [
  {
    path: '', //what is the expected path ex: 'users'
    pathMatch: 'full', // good to have this as full for the root route, but not always required for others
    // children: [],
    // component: NoforecastComponent, //what is the component to load for this path
    redirectTo: 'sanjose', // can alternatively use "redirectTo" to go to a different URL (replace component)
  }, // add more paths between another set of brackets {}
  {
    path: ':loc',
    component: WeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
