import { Component, AfterViewInit } from '@angular/core';

import { interval, fromEvent, of } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'AngularRxjs';

  constructor() {
    // Example One
    // const secondsCounter = interval(1000);
    // secondsCounter.subscribe(n =>
    // console.log(`It's been ${n} seconds since subscribing!`));

    // Example Three
    // const apiData =
    // ajax('http://apiv3.iucnredlist.org/api/v3/country/list?token=9bb4facb6d23f48efbf424bb05c0c1ef1cf6f468393bc745d42179ac4aca5fee');
    // apiData.subscribe(res => console.log(res.status, res.response));

    // Example Four
    // const nums = of(1, 2, 3);

    // const squareValues = map((val: number) => val * val);
    // const squaredNums = squareValues(nums);

    // squaredNums.subscribe(x => console.log(x));
  }

  ngAfterViewInit() {
    // Example Two
    // const el = document.getElementById('my-element');

    // const mouseMoves = fromEvent(el, 'mousemove');

    // const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
    //   console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
    //   if (evt.clientX < 40 && evt.clientY < 40) {
    //     subscription.unsubscribe();
    //   }
    // });
  }
}
