import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ModalModule, BsModalRef } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './structure/menu-bar/menu-bar.component';
import { FooterComponent } from './structure/footer/footer.component';
import { ExperienceComponent } from './experience/experience.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { MapComponent } from './map/map.component';
import { AgmCoreModule } from '@agm/core';
import { ModalComponent } from './modal/modal.component';
import { GameComponent } from './game/game.component';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from './timer/timer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    FooterComponent,
    ExperienceComponent,
    HomeComponent,
    SkillsComponent,
    MapComponent,
    ModalComponent,
    GameComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: ''
    })
  ],
  providers: [BsModalRef],
  bootstrap: [AppComponent]
})
export class AppModule { }
