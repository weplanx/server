import { Component } from '@angular/core';

@Component({
  selector: 'app-center-nav',
  templateUrl: 'nav.component.html'
})
export class NavComponent {
  open(path: string[] = []): any[] {
    return ['/center', ...path];
  }
}
