import {Component, Input} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {CardComponent} from "./components/card/card.component";
import {MatButtonModule} from "@angular/material/button";
import {MatDividerModule} from "@angular/material/divider";
import {MatIconModule} from "@angular/material/icon";
import {MatCardImage} from "@angular/material/card";
import {NavbarComponent} from "./components/navbar/navbar.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent, MatButtonModule,
    MatDividerModule, MatIconModule, MatCardImage, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
