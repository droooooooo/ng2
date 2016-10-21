import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import homeRoutes from './home.routes.ts';

@NgModule({
	declarations: [
		HomeComponent
  	],
  	imports: [
  		homeRoutes
  	],
  	providers: []
})
export default class HomeModule { }