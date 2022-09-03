import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner/banner.component';
import { HeaderComponent } from './header/header.component';
import { LogoComponent } from './logo/logo.component';
import { NavComponent } from './nav/nav.component';
import { SectionServicesComponent } from './section-services/section-services.component';
import { CardServicesComponent } from './card-services/card-services.component';



@NgModule({
  declarations: [
    BannerComponent,
    HeaderComponent,
    LogoComponent,
    NavComponent,
    SectionServicesComponent,
    CardServicesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BannerComponent,
    HeaderComponent,
    LogoComponent,
    NavComponent,
    SectionServicesComponent,
    CardServicesComponent
  ]
})
export class ComponentsModule { }
