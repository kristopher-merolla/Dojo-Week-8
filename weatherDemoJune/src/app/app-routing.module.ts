import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// need to import components you need!
import { WeatherComponent } from './weather/weather.component';
// these will become the children of the path "weather"
import { SkyComponent } from './sky/sky.component';
import { TempComponent } from './temp/temp.component';
import { WindComponent } from './wind/wind.component';

const routes: Routes = [
  {
    path: 'weather',
    component: WeatherComponent,
    children: [
      { path: 'sky/:sky',component: SkyComponent },
      { path: 'temp/:temp',component: TempComponent },
      { path: 'wind/:wind',component: WindComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
