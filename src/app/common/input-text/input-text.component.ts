import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.css']
})
export class InputTextComponent implements OnInit {
  @Input('input') input = {
    label: {
      id: 'hello',
      text: 'hello'
    }
  };
  value;
  constructor() {}

  ngOnInit() {}
}
