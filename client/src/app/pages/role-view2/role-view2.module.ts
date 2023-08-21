import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleView2RoutingModule } from './role-view2-routing.module';
import { RoleView2Component } from './role-view2.component';
import {TuiExpandModule} from '@taiga-ui/core'
import {TuiAccordionModule} from '@taiga-ui/kit'
import {TuiDataListWrapperModule, TuiComboBoxModule} from '@taiga-ui/kit';


@NgModule({
  declarations: [
    RoleView2Component
  ],
  imports: [
    CommonModule,
    RoleView2RoutingModule,
    TuiExpandModule,
    TuiAccordionModule,
    TuiDataListWrapperModule,
    TuiComboBoxModule
  ]
})
export class RoleView2Module { }
