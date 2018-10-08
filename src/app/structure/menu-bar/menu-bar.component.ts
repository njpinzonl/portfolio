import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent implements OnInit {
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

  toggle() {
    document.getElementById('navbarNavAltMarkup').classList.remove('show');
  }
}
