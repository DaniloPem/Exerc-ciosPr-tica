import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomaComponent } from './soma.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [SomaComponent],
  imports: [CommonModule, MatCardModule, MatToolbarModule],
  exports: [SomaComponent],
})
export class SomaModule {}
