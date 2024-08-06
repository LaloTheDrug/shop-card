import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {ServicesService} from "../../Services/services.service";
import {AuthService} from "../../Services/auth.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MatButton,RouterLink
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  constructor(public cartService: ServicesService,public authService:AuthService) {
  }
}
