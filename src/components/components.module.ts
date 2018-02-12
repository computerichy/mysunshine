import { NgModule } from '@angular/core';
import { SunnyProgressComponent } from './sunny-progress/sunny-progress';
import { SunnyBlockbarComponent } from './sunny-blockbar/sunny-blockbar';
import { MagicComponent } from './magic/magic';
import { LoginComponent } from './login/login';
import { NavbarComponent } from './navbar/navbar';
@NgModule({
	declarations: [SunnyProgressComponent,
    SunnyBlockbarComponent,
    MagicComponent,
    LoginComponent,
    NavbarComponent],
	imports: [],
	exports: [SunnyProgressComponent,
    SunnyBlockbarComponent,
    MagicComponent,
    LoginComponent,
    NavbarComponent]
})
export class ComponentsModule {}
