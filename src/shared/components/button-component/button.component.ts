/*
 * HGSE-ABP software.
 * Copyright (C) 2017-20** Santillana
 * mailto:
 *
 * License: to be determined
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() name: string;
  @Input() kind: string;

  constructor() { }

  ngOnInit() {
  }

  checkKing() {
    switch (this.kind) {
      case 'main':
      case 'accept':
      case 'cancel':
      case 'ghost':
      case 'disabled':
      case 'search':
        return this.kind;
      default:
        return 'default';
    }
  }

}
