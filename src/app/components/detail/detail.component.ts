import {Component, EventEmitter, Input, Output} from '@angular/core';
import {ServicesService} from "../../Services/services.service";
import {ProductModel} from "../../models/product.model";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, MatCardModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent {
  constructor(public cartService: ServicesService) {}
  addToCart(value: any) {
    this.cartService.addToCart(value);
  }
  removeFromCart(index: any) {
    this.cartService.removeFromCart(index);
  }
  @Input() product !: ProductModel;

  @Output() buttonClick  = new EventEmitter();

  clickButton(value: any) {
    this.buttonClick.emit(value);
  }
}
