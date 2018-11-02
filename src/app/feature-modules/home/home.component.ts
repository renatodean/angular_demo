/*
 * HGSE-ABP software.
 * Copyright (C) 2017-20** Santillana
 * mailto:
 *
 * License: to be determined
 */

import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activeProducts: boolean = true;

  constructor(private router: Router,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() { }

  setActiveProducts(activeProducts) {
    this.activeProducts = activeProducts;
    if (this.activeProducts) {
      this.router.navigate(['products'], {relativeTo: this.activatedRoute});
    } else {
      this.router.navigate(['users'], {relativeTo: this.activatedRoute});
    }
  }

}
