import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UsagePage } from './usage';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    UsagePage,
  ],
  imports: [
    IonicPageModule.forChild(UsagePage),
    ComponentsModule
  ],
})
export class UsagePageModule {}
