import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogicaComponent } from './logica.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [LogicaComponent],
  imports: [CommonModule, MatCardModule, MatToolbarModule],
  exports: [LogicaComponent],
})
export class LogicaModule {}
