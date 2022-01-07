import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Highlight } from './Highlight.directive';
import { SharedComponent } from './shared.component';

@NgModule({
  imports: [
    CommonModule
  ],
 
  declarations: [Highlight,SharedComponent],
  exports:[SharedComponent,Highlight]
})

export class SharedModule { }