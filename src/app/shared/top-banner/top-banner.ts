import { Component } from '@angular/core';
import { Home } from '../../pages/home/home';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-top-banner',
  imports: [RouterLink],
  templateUrl: './top-banner.html',
  styleUrl: './top-banner.css',
})
export class TopBanner {}
