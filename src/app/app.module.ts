import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsComponent } from "./forms/forms.component";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { NameEditorComponent } from './name-editor/name-editor.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    CapitalizePipe,
    NameEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
