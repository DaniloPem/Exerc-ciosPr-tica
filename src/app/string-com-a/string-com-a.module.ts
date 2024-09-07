import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StringComAComponent } from './string-com-a.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [StringComAComponent],
  imports: [CommonModule, MatToolbarModule, MatCardModule, FormsModule],
  exports: [StringComAComponent],
})
export class StringComAModule {}
