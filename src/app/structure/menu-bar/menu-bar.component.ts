import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
  active_home: boolean;
  active_exp: boolean;
  active_skill: boolean;
  current_route: string;


  constructor(private router: Router) {
    router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((event: NavigationStart) => {
        this.current_route = event.url;
      });
   }

  ngOnInit() {
  }
  // isActive(param) {
  //   if (param === 'home') {
  //     this.active_home = true;
  //     this.active_exp = false;
  //     this.active_skill = false;
  //   } else if (param === 'exp') {
  //     this.active_home = false;
  //     this.active_exp = true;
  //     this.active_skill = false;
  //   } else if (param === 'skill') {
  //     this.active_home = false;
  //     this.active_exp = false;
  //     this.active_skill = true;
  //   }
  // }

}
