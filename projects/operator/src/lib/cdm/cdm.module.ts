import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdmRoutingModule } from './cdm-routing.module';
import { CdmListComponent } from './cdm-list/cdm-list.component';
import { CdmStatusComponent } from './cdm-status/cdm-status.component';
import { XfsCdmModule } from 'xfs';
import { UiModule } from '../ui/ui.module';
import { DispenseComponent } from './dispense/dispense.component';

@NgModule({
  imports: [
    CommonModule,
    CdmRoutingModule,
    XfsCdmModule,
    UiModule
  ],
  declarations: [CdmListComponent, CdmStatusComponent, DispenseComponent]
})
export class CdmModule { }
