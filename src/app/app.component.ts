import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';
import { HeroService } from 'app/services/hero.service';
import { VoterService } from 'app/services/voter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HeroService, VoterService]
})
export class AppComponent {
  title1 = 'Patient Editor';
  constructor(private title: Title) {
    // setTitle ! pour changer le title
    this.title.setTitle('page title changed');
  }
}
