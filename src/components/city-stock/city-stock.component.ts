import { Component, Input } from '@angular/core';
import { NgClass, NgIf } from "@angular/common";

@Component({
  selector: 'app-city-stock',
  templateUrl: './city-stock.component.html',
  imports: [
    NgIf,
    NgClass
  ],
  styleUrls: ['./city-stock.component.scss']
})
export class CityStockComponent {
  @Input() city!: { name: string; stock: number; date: string; isFastDelivery: boolean };
  count = 0;

  increase() {
    if (this.count < this.city.stock) {
      this.count++;
    }
  }

  decrease() {
    if (this.count > 0) {
      this.count--;
    }
  }
}
