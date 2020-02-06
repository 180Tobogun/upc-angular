import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MaterialModule} from '../material.module';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './child/child.component';


@NgModule({
  declarations: [ParentComponent, ChildComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    ParentComponent,
    ChildComponent
  ]
})
export class DirectiveModule {
}
