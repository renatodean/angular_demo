/*
 * HGSE-ABP software.
 * Copyright (C) 2017-20** Santillana
 * mailto:
 *
 * License: to be determined
 */

import {Component, OnInit} from '@angular/core';
import { Product } from 'shared/models/product.model';
import { ProductService } from 'shared/services';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-products',
    templateUrl: './products.component.html',
    styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
    products: Product[] = new Array<Product>();

    constructor(private productService: ProductService,
                private router: Router,
                private activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.productService.getProducts().subscribe(response => {
            this.products = response;
        });
    }

    navigateToDetail(productId) {
        this.productService.setIdProductDetail(productId);
        this.router.navigate(['detail'], {relativeTo: this.activatedRoute});
    }
}
