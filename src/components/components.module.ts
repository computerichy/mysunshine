import { NgModule } from '@angular/core';
import { SunnyProgressComponent } from './sunny-progress/sunny-progress';
import { SunnyBlockbarComponent } from './sunny-blockbar/sunny-blockbar';
import { MagicComponent } from './magic/magic';
import { LoginComponent } from './login/login';
@NgModule({
	declarations: [SunnyProgressComponent,
    SunnyBlockbarComponent,
    MagicComponent,
    LoginComponent],
	imports: [],
	exports: [SunnyProgressComponent,
    SunnyBlockbarComponent,
    MagicComponent,
    LoginComponent]
})
export class ComponentsModule {}
