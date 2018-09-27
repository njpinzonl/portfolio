import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './structure/menu-bar/menu-bar.component';
import { FooterComponent } from './structure/footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FooterComponent,
    ExperienceComponent,
    HomeComponent,
    SkillsComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD1GdqOzdCaEkB-bMOs7QroSmPmoChL-rk'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
