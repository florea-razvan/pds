import { Component, Inject, Optional, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { ControlInputAccessor, ElementFocusState, INPUT_ACCESSOR, resolveElementFocusState } from '@vitagroup/cdk';
import { DropdownDef } from './dropdown-def';

@Component({
  selector: 'pds-dropdown',
  styleUrls: ['./dropdown-overlay.scss'],
  encapsulation: ViewEncapsulation.None,
  inputs: ['preferredPosition'],
  providers: [{ provide: ElementFocusState, useFactory: resolveElementFocusState, deps: [Dropdown] }],
  template: `
    <ng-template #templateRef>
      <ng-content></ng-content>
    </ng-template>
  `,
})
export class Dropdown extends DropdownDef {
  @ViewChild('templateRef') template: TemplateRef<any>;

  constructor(@Inject(INPUT_ACCESSOR) @Optional() inputAccessor?: /* @dynamic */ ControlInputAccessor) {
    super(null, inputAccessor);
  }
}
