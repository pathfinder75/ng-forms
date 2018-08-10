import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser/src/browser/title';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title1 = 'Patient Editor';
  constructor(private title: Title) {
    // setTitle ! pour changer le title
    this.title.setTitle('page title changed');
  }
}
