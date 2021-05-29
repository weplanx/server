import { Component } from '@angular/core';

@Component({
  selector: 'app-home-nav',
  templateUrl: './nav.component.html'
})
export class NavComponent {
  open(path: string[] = []): any[] {
    return ['/home', ...path];
  }
}
