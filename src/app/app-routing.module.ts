import { ContatoComponent } from './views/contato/contato.component';
import { PortfolioComponent } from './views/portfolio/portfolio.component';
import { AcademiaComponent } from './views/academia/academia.component';
import { HomeComponent } from './views/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: "",
  component: HomeComponent
}, {
  path: "school",
  component: AcademiaComponent
}, {
  path: "portfolio",
  component: PortfolioComponent
}, {
  path: "contato",
  component: ContatoComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
