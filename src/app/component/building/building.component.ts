import { Component } from '@angular/core';

@Component({
  selector: 'app-building',
  template: `
    <nz-result nzStatus="400" nzTitle="400" nzSubTitle="Sorry, the page you visited developing.">
      <div nz-result-extra>
        <button
          nz-button
          nzType="primary"
          [routerLink]="['/']"
        >
          Back Home
        </button>
      </div>
    </nz-result>
  `
})
export class BuildingComponent {
}
