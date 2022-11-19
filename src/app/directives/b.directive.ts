import { Directive, inject } from '@angular/core';
import { DestroyDirective } from './destroy.directive';

@Directive({
  selector: '[app-b]',
  standalone: true,
  hostDirectives: [DestroyDirective],
})
export class BDirective {
  private readonly _destroy$ = inject(DestroyDirective).destroy$;
}
