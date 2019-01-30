import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { GameComponent } from './game/game.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    component: HomeComponent,
    path: 'home'
  },
  {
    component: ExperienceComponent,
    path: 'experience'
  },
  {
    component: SkillsComponent,
    path: 'skills'
  },
  {
    component: GameComponent,
    path: 'game'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
