import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data-bind-lab';
  numClicks: number = 0;
  hidden = false;

  count() {
    this.numClicks++;
  }
  show() {
    if (this.hidden == true) {
      this.hidden = false;
    }
    else {
      this.hidden = true;
    }
  }//show
  
}
