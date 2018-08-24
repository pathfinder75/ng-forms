import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsComponent } from "./forms/forms.component";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { NameEditorComponent } from './name-editor/name-editor.component';
import { LoginComponent } from './modules';
import { HeroComponent } from './hero/hero.component';
import { DynamicPipe } from './pipes/dynamic.pipe';
import { HighlightDirective } from './highlight.directive';
import { AutocapitalizeDirective } from 'app/autocapitalize.directive';
import { TextCopyDirective } from './copy-text.directive';
import { HeroChildComponent } from './hero/hero-child/hero-child.component';
import { MyVoterComponent } from './vote-taker/my-voter/my-voter.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { TableComponent } from 'app/table/table.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    CapitalizePipe,
    NameEditorComponent,
    LoginComponent,
    HeroComponent,
    DynamicPipe,
    HighlightDirective,
    AutocapitalizeDirective,
    TextCopyDirective,
    HeroChildComponent,
    MyVoterComponent,
    VoteTakerComponent,
    TableComponent,
    CountdownTimerComponent,
    CountdownParentComponent
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
