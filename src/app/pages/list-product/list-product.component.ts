import { Component } from '@angular/core';
import {ServicesService} from "../../Services/services.service";
import {CardComponent} from "../../components/card/card.component";

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent {
  constructor(public cartService: ServicesService) {}

}
