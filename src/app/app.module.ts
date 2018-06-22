import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsComponent } from "./forms/forms.component";
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { FormsModule }   from '@angular/forms';
import { AutocapitalizeDirective } from './autocapitalize.directive';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    CapitalizePipe,
    AutocapitalizeDirective,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
