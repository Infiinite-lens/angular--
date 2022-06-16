import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `<h6>Success....</h6>`,
  styles: [
    `
      h6 {
        color: green;
      }
    `,
  ],
})
export class SuccessAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
