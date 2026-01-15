import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { register } from 'swiper/element/bundle';
import { Swiper } from 'swiper/types';

register();

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Home {
  spaceBetween = 20;

  destinations = [
    { name: 'France', image: 'assets/destinations/eiffel-tower.jpg' },
    { name: 'USA', image: 'assets/destinations/statue-of-liberty.jpg' },
    { name: 'Brazil', image: 'assets/destinations/christ-the-redeemer.jpg' },
    { name: 'Italy', image: 'assets/destinations/pisa-tower.jpg' },
    { name: 'Tanzania', image: 'assets/destinations/zanzibar-tanzania.jpg' },
    { name: 'Bahamas', image: 'assets/destinations/bahamas.jpg' },
    { name: 'Spain', image: 'assets/destinations/barcelona.jpg' },
    { name: 'Iceland', image: 'assets/destinations/northern-lights.jpg' },
    { name: 'UK', image: 'assets/destinations/tower-bridge.jpg' },
    { name: 'Greece', image: 'assets/destinations/santorini.jpg' },
    { name: 'Japan', image: 'assets/destinations/mt-fuji.jpg' },
    { name: 'Egypt', image: 'assets/destinations/pyramids.jpg' },
  ];

  onProgress(event: CustomEvent<[Swiper, number]>) {
    const [swiper, progress] = event.detail;
    // You can use progress for animations
  }

  onSlideChange() {
    console.log('slide change');
  }
}
