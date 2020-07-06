import { Component, Inject, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
})
export class EmployerComponent {
  id: number;
  name: string;
  founded: string;
  employeeCount: string;
  description: string;

  constructor() { }
}
