import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ProductModel} from "../../models/product.model";
import {CardComponent} from "../../components/card/card.component";
import {ActivatedRoute} from "@angular/router";
import {ServicesService} from "../../Services/services.service";
import {MatButton} from "@angular/material/button";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {DetailComponent} from "../../components/detail/detail.component";

let DetailsComponent;

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    DetailComponent
  ],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  detailProduct !: ProductModel;
  constructor(public cartService: ServicesService, private activatedRoute: ActivatedRoute) {
    const {id} = this.activatedRoute.snapshot.params;
    // tìm product theo id
    this.detailProduct =
      this.cartService.products.find(product =>
        product.id == parseInt(id)) as ProductModel;
    console.log(this.detailProduct.id)
    console.log(this.detailProduct)
  }
}
