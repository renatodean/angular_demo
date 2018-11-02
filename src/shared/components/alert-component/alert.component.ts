/*
 * HGSE-ABP software.
 * Copyright (C) 2017-20** Santillana
 * mailto:
 *
 * License: to be determined
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() showAlert: string;
  @Input() type: string;
  @Input() alertTitle: string;
  @Input() alertText: string;

  constructor() { }

  ngOnInit() {
  }

}
