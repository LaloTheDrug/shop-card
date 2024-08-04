import {Component, Input} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {ServicesService} from "./Services/services.service";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatCardImage} from "@angular/material/card";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, MatButtonModule, MatDividerModule, MatIconModule, MatCardImage],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  element: any;
  constructor(public cartService: ServicesService) {}

  removeFromCart(index: number) {
    this.cartService.removeFromCart(index);
  }
}
