import { Component } from '@angular/core';
import { ADirective } from '../directives/a.directive';
import { BDirective } from '../directives/b.directive';

@Component({
  selector: 'app-issue-comp',
  templateUrl: './issue-comp.component.html',
  standalone: true,
  imports: [ADirective, BDirective],
})
export class IssueCompComponent {}
