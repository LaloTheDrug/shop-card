import { Component } from '@angular/core';
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {ServicesService} from "../../Services/services.service";

@Component({
  selector: 'app-list-cart',
  standalone: true,
    imports: [
        MatFabButton,
        MatIcon,
        MatButton
    ],
  templateUrl: './list-cart.component.html',
  styleUrl: './list-cart.component.scss'
})
export class ListCartComponent {
  constructor(public cartService: ServicesService) {
  }
}
