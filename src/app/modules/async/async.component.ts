import { Observable } from "rxjs/Observable";
import { Component } from "@angular/core";
import 'rxjs/add/observable/of';

@Component({
    selector: 'async-stuff',
    template: `
    <h1>Hello {{ name | async }}</h1>
    Your friends list:
    <ul>
        <li *ngFor="let friend of friends | async>
            {{friend}}
        </li>
    </ul>`
})
class AsyncStuffComponent {
    name = Promise.resolve('Misko');
    friends = Observable.of(['Igor']);
}