import {Component, HostListener, Inject, Input, OnDestroy, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  customerDetails: any = {};
  companyDetails: any = {};

  constructor() {
    this.customerDetails = {
      'Jessica': {
        id: '1111',
        age: 35,
        employer: 'ABCD Bank'
      },
      'Mark': {
        id: '2222',
        age: 45,
        employer: 'XY Holding'
      },
    };
    this.companyDetails = {
      'ABCD Bank': {
        id: 2020,
        founded: 1982,
        employeeCount: 20000,
        description: 'ABCD Bank provides wide variety of innovative banking products and services. ' +
          'We are located in several regions of California and Florida. '
      },
      'XY Holdings': {
        id: 2021,
        founded: 2000,
        employeeCount: 10000,
        description: 'XY Holdings Ltd. provides hosting services, custom software solutions, and an import/export division.'
      }
    };
  }

  openEmployerPopout(name: string) {
      console.log(name);
  }
}
