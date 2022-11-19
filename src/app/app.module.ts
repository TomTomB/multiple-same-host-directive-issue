import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { IssueCompComponent } from './issue-comp/issue-comp.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IssueCompComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
