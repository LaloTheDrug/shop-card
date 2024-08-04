import {Component, EventEmitter, Input, numberAttribute, Output} from '@angular/core';
import {ServicesService} from "../../Services/services.service";
import {MatIconModule} from "@angular/material/icon";
import {MatDividerModule} from "@angular/material/divider";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatIconModule,MatDividerModule,MatButtonModule,MatCardModule],
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
  @Input() id!: number;
  @Input() name!: string;
  @Input() description!: string;
  @Input() price!: number;
  @Input() inStock!: number;

  @Output() buttonClick  = new EventEmitter();

  clickButton(value: any) {
    this.buttonClick.emit(value);
  }
}
