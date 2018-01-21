import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BarraComponent } from './components/barra/barra.component';
import { DonaComponent } from './components/dona/dona.component';
import { LineaComponent } from './components/linea/linea.component';
import { RadarComponent } from './components/radar/radar.component';

const routes: Routes = [
  {
    path: 'barra',
    component: BarraComponent
  },
  {
    path: 'donut',
    component: DonaComponent
  },
  {
    path: 'linea',
    component: LineaComponent
  },
  {
    path: 'radar',
    component: RadarComponent
  },
  {
    path: '**', pathMatch: 'full', redirectTo: 'barra'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {}

//  {useHash: true} Es para poner la almohadilla, importante para enviar parámetros en la url.
