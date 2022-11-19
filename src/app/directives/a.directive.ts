import { Directive, inject } from '@angular/core';
import { DestroyDirective } from './destroy.directive';

@Directive({
  selector: '[app-a]',
  standalone: true,
  hostDirectives: [DestroyDirective],
})
export class ADirective {
  private readonly _destroy$ = inject(DestroyDirective).destroy$;
}
