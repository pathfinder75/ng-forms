import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormsComponent } from "./forms/forms.component";
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { NameEditorComponent } from './name-editor/name-editor.component';
import { LoginComponent } from './modules';
import { PatientComponent } from './patient/patient.component';
import { DynamicPipe } from './pipes/dynamic.pipe';
import { HighlightDirective } from './highlight.directive';
import { AutocapitalizeDirective } from 'app/autocapitalize.directive';
import { TextCopyDirective } from './copy-text.directive';
import { HeroChildComponent } from './patient/hero-child/hero-child.component';
import { MyVoterComponent } from './vote-taker/my-voter/my-voter.component';
import { VoteTakerComponent } from './vote-taker/vote-taker.component';
import { TableComponent } from 'app/table/table.component';
import { CountdownTimerComponent } from './countdown-parent/countdown-timer/countdown-timer.component';
import { CountdownParentComponent } from './countdown-parent/countdown-parent.component';
import { MessageComponent } from './message/message.component';
import { MessageService } from 'app/services/message.service';
import { AppRoutingModule } from './/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    CapitalizePipe,
    NameEditorComponent,
    LoginComponent,
    PatientComponent,
    DynamicPipe,
    HighlightDirective,
    AutocapitalizeDirective,
    TextCopyDirective,
    HeroChildComponent,
    MyVoterComponent,
    VoteTakerComponent,
    TableComponent,
    CountdownTimerComponent,
    CountdownParentComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
