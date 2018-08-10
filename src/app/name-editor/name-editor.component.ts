import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {
  myGroup = new FormGroup({
    name: new FormControl()
  });
  textToBeCopied = "Elo";
  constructor() { }

  ngOnInit() {
  }

}
