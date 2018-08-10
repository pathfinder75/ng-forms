import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  // table: any;
  constructor() { }
  
  ngOnInit() {
    // this.table.pipes = [ null, null, null, 'humanizeDate', 'statusFromBoolean' ],
    // this.table.header = [ 'id', 'title', 'url', 'created', 'status' ],
    // this.table.rows = [
    // [ 1, 'Home', 'home', '2016-08-27T17:48:32', true ],
    // [ 2, 'About Us', 'about', '2016-08-28T08:42:09', true ],
    // [ 4, 'Contact Us', 'contact', '2016-08-28T13:28:18', false ],
    // ]
  }

}
