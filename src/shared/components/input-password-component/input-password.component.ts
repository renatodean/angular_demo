/*
 * HGSE-ABP software.
 * Copyright (C) 2017-20** Santillana
 * mailto:
 *
 * License: to be determined
 */

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent implements OnInit {
  @Input() name: String;
  @Input() valueInput: string;

  /**
   * EventEmitter to communicate the parent the change of input value
   */
  @Output() valueInputChange = new EventEmitter<string>();

  /**
   * Funtion that sets the current value of the input and send
   * the value to his parent with the EventEmitter
   * @param val: string
   */
  update(val: string) {
    this.valueInput = val;
    this.valueInputChange.emit(this.valueInput);
  }

  constructor() { }

  ngOnInit() {
  }

}
