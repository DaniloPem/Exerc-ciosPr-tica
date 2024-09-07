import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FibonacciComponent } from './fibonacci.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FibonacciComponent],
  imports: [CommonModule, MatToolbarModule, MatCardModule, FormsModule],
  exports: [FibonacciComponent],
})
export class FibonacciModule {}
