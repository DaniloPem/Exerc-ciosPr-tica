import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FibonacciModule } from './fibonacci/fibonacci.module';
import { StringComAModule } from './string-com-a/string-com-a.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FibonacciModule,
    StringComAModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
