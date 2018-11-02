import { Component, OnInit } from '@angular/core';
import { ProductService } from 'shared/services';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'shared/models/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  idProduct: number;
  product: Product = new Product();

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getIdProductDetail().subscribe(idProduct => {
      if (idProduct) {
        this.idProduct = idProduct;
        this.getProduct();
      }
    });
  }

  getProduct() {
    this.productService.getProductById(this.idProduct).subscribe(response => {
      this.product = response;
    });
  }

  disminuirStock() {
    this.product.stock--;
  }

}
