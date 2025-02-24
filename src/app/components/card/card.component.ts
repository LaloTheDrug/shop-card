import {Component, EventEmitter, Input, numberAttribute, Output} from '@angular/core';
import {ServicesService} from "../../Services/services.service";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {ProductModel} from "../../models/product.model";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule, MatDividerModule, MatButtonModule, MatCardModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
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
