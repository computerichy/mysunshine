import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SunnyProgressComponent } from './sunny-progress/sunny-progress';
import { LoginComponent } from './login/login';
import { NavbarComponent } from './navbar/navbar';
@NgModule({
	declarations: [
    SunnyProgressComponent,
    LoginComponent,
    NavbarComponent],
	imports: [IonicModule],
	exports: [
     SunnyProgressComponent,
    LoginComponent,
    NavbarComponent]
})
export class ComponentsModule {}


