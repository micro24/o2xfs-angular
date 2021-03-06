import { Directive, Input, ElementRef } from '@angular/core';
import { Dispenser } from '../dispenser.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmDispenser]'
})
export class CdmDispenserDirective extends AbstractOutcomeDirective {

  @Input('cdmDispenser')
  value: Dispenser;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case Dispenser.OK:
        result = Outcome.SUCCESS;
        break;
      case Dispenser.CUSTATE:
        result = Outcome.WARNING;
        break;
      case Dispenser.CUSTOP:
      case Dispenser.CUUNKNOWN:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



